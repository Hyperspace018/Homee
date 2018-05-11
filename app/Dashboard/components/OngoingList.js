import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { 
  Card, CardItem, Icon, Badge, Text, Title, 
  Body, Button, SwipeRow, Left, Right, Content, List, ListItem,
  View, Spinner, Toast
} from 'native-base';
import moment from 'moment';
import { connect } from 'react-redux';
import { putState, allOngoingHomeWork, allDoneHomework, allPendingHomework } from '../actions';

class OngoingList extends Component{

  handleMoveState(objectId, state){
    this.props.dispatch(putState(objectId,state))
    .then(() => {
      AsyncStorage.multiGet(['@objectId:key'], (error, result) => {
        if(result){
          if(result[0][1] !== null){
            this.props.dispatch(allOngoingHomeWork(result[0][1]))
            this.props.dispatch(allDoneHomework(result[0][1]))
            this.props.dispatch(allPendingHomework(result[0][1]))
          }
        }
      });
    })
  }

  render(){
    return(
      this.props.homeworkReducers.isLoading ? (
        this.props.homeworkReducers.homeworksOngoing.length <= 0 ? (
          <Spinner color="#e67e22"/>
        ) : (
          this.props.homeworkReducers.isError ? (
            <View style={styles.container}>
              <Text style={styles.errorResponse}>An error occurred</Text>
            </View>
          ) : (
            this.props.homeworkReducers.homeworksOngoing.map((homework) => (
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
      ) : (
        this.props.homeworkReducers.isError ? (
          <View style={styles.container}>
            <Text style={styles.errorResponse}>An error occurred</Text>
          </View>
        ) : (
          this.props.homeworkReducers.homeworksOngoing.map((homework) => (
            <TouchableOpacity onPress={() => this.handleMoveState(homework.objectId, "done")} onLongPress={() => this.handleMoveState(homework.objectId, "pending")}>
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
            </TouchableOpacity>          
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