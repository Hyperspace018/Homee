import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { 
  Card, CardItem, Icon, Badge, Text, Title, 
  Body, Button, SwipeRow, Left, Right, Content, List, ListItem,
  View, Spinner
} from 'native-base';
import moment from 'moment';
import { connect } from 'react-redux';

class DoneList extends Component{

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
          this.props.homeworkReducers.homeworksDone.map((homework) => (
            <Card>
              <CardItem bordered>
                <Text style={{color: "#2ecc71", fontWeight: "bold"}}>{homework.title}</Text>
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

export default connect(mapStateToProps)(DoneList)