import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Icon, Badge, Text, Title, Body, Button, SwipeRow, Left, Right } from 'native-base';

export default class OngoingList extends Component{

  render(){
    return(
      <Card>
        <CardItem bordered>
          <Text style={{color: "#e67e22", fontWeight: "bold"}}>PR Matematika LKS Hal 13</Text>
        </CardItem>
        <CardItem bordered style={{ padding: 2}}>
          <Body>
            <Text>Teacher</Text>
            <Text note>Mrs.Handayani</Text>
            <Text>Deadline</Text>
            <Text note>3 November 2019</Text>
          </Body>
        </CardItem>
      </Card>
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
  welcomeTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcomeSubtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});