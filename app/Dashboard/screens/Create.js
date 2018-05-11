import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { 
  Container, Content, Button, View, Form, Text, Label, Input, Item
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { connect } from 'react-redux';
import { postOngoingHomeWork, allOngoingHomeWork, allDoneHomework, allPendingHomework } from '../actions';

class Create extends Component{

  state = {
    isVisible: false,
    homework:{
      state: "ongoing",
      owner: "",
      title: "",
      teacher: "",
      deadline: ""
    }
  }

  componentDidMount(){
    AsyncStorage.multiGet(['@objectId:key'], (error, result) => {
      if(result){
        if(result[0][1] !== null){
          this.setState({homework:{...this.state.homework, owner: result[0][1]}})
        }
      }
    });
  }

  handleShowDatePicker = () => {
    this.setState({isVisible : true})
  }

  handleHideDatePicker = () => {
    this.setState({isVisible : false})
  }

  handleDatePicked = (date) => {
    this.setState({homework:{...this.state.homework, deadline: date}})
    alert("You have set deadline at " + date)
  }

  handleSubmit(){
    this.props.dispatch(postOngoingHomeWork(this.state.homework))
    .then((result) => {
      AsyncStorage.multiGet(['@objectId:key'], (error, result) => {
        if(result){
          if(result[0][1] !== null){
            this.props.dispatch(allOngoingHomeWork(result[0][1]))
            this.props.dispatch(allDoneHomework(result[0][1]))
            this.props.dispatch(allPendingHomework(result[0][1]))
            this.props.dispatch({type:"Navigation/BACK", routeName:"Main"})
          }
        }
      });
    })
  }

  render(){
    return(
      <Container style={styles.container}>
        <Form style={styles.form}>

          <Label>Title</Label>
          <Item regular>
            <Input 
              value={this.state.homework.title} 
              placeholder="Create a story in english"
              onChangeText={(text) => this.setState({homework:{...this.state.homework, title: text}})}/>
          </Item>

          <Label>Teacher</Label>
          <Item regular>
            <Input 
              value={this.state.homework.teacher}
              placeholder="example: Mr.Moon"
              onChangeText={(text) => this.setState({homework:{...this.state.homework, teacher: text}})}/>
          </Item>

          <Label>Deadline</Label>
          <Item regular>
            <Input 
              value={moment(this.state.homework.deadline).format('lll')}/>
          </Item>

          <Button block primary
            onPress={()=> this.handleShowDatePicker()}>
            <Text>Pick Datetimes</Text>
          </Button>

          <View style={styles.confirmButtons}>
            <Button block style={styles.createButton} 
              onPress={() => this.handleSubmit() }>
              <Text>Create</Text>
            </Button>
            <Button block style={styles.cancelButton}
              onPress={()=> this.props.dispatch({
                type:"Navigation/BACK",
                routeName: "Main"
              })}>
              <Text>Cancel</Text>
            </Button>
          </View>

          <View style={styles.container}>
            <Text style={styles.warningText}>You only can pick deadline once time</Text>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.handleShowDatePicker}>
              <Text>Show DatePicker</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.handleHideDatePicker}
            />
          </View>

        </Form>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#ffffff"
  },
  form:{
    padding: 10
  },
  warningText:{
    paddingTop: 10,
    padding: 5,
    alignSelf: "center"
  },
  confirmButtons:{
    flexDirection: "row", 
    flex: 1, 
    position: "absolute", 
    top: 350, 
    left: 0, 
    right: 0, 
    justifyContent: 'space-evenly'    
  },
  cancelButton:{
    backgroundColor: "#d63031", width: 170
  },
  createButton:{
    backgroundColor: "#2ecc71", width: 170
  }
});

const mapStateToProps = (state) => ({
  homeworkReducers: state.homeworkReducers
})

export default connect(mapStateToProps)(Create);