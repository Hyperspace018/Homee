import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity,AsyncStorage } from 'react-native';
import { 
  Card, CardItem, Icon, Badge, Text, Title, 
  Body, Button, SwipeRow, Left, Right, Content, List, ListItem,
  View, Spinner
} from 'native-base';
import moment from 'moment';
import { connect } from 'react-redux';
import { allOngoingHomeWork } from '../actions'

class OngoingList extends Component{

  componentDidMount(){
    AsyncStorage.multiGet(['@objectId:key'], (error, result) => {
      if(result){
        if(result[0][1] !== null){
          this.props.dispatch(allOngoingHomeWork(result[0][1]))
        }
      }
    });
  }

  render(){
    return(
      this.props.homeworkReducers.isLoading ? (
        <Spinner color="#e67e22"/>
      ) : (
        this.props.homeworkReducers.isError ? (
          <View style={styles.container}>
            <Text style={styles.errorResponse}>An error occurred</Text>
          </View>
        ) : (
          this.props.homeworkReducers.homeworks.map((homework) => (
            <Card>
              <CardItem bordered>
                <Text style={{color: "#3498db", fontWeight: "bold"}}>{homework.title}</Text>
              </CardItem>
              <CardItem bordered style={{ padding: 2}}>
                <Body>
                  <Text>Teacher</Text>
                  <Text note>{homework.teacher}</Text>
                  <Text>Deadline</Text>
                  <Text note>{moment(homework.deadline).format('lll')}</Text>
                </Body>
              </CardItem>
            </Card>
          ))
        )
      )
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  errorResponse: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  errorResponseSub: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => ({
  homeworkReducers: state.homeworkReducers
})

export default connect(mapStateToProps)(OngoingList)