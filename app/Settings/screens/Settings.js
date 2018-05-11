import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
  Container, Content, Text, Button, View,
  Header, Body, Title, Card, CardItem
} from 'native-base';

export default class ExampleScreen1 extends Component{

  render(){
    return(
      <Container>
        <Header style={{backgroundColor:"#e67e22"}}>
          <Body>
            <Title>Settings</Title>
          </Body>
        </Header>
        <Card>
          <CardItem>
            <View style={styles.container}>
              <Text style={styles.welcomeTitle}>Settings</Text>
              <Text style={styles.welcomeSubtitle}>Settings Screen</Text>
            </View>
          </CardItem>
        </Card>
      </Container>
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