import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Text, Button, View } from 'native-base';

export default class Splash extends Component{

  navigateToMain(){
    setTimeout(() => {
      this.props.navigation.navigate("Register");
    }, 1000)
  }

  componentDidMount(){
    this.navigateToMain();
  }

  render(){
    return(
      <Container>
        <View style={styles.container}>
          <Image 
            source={require("../../../assets/images/Homee.png")}
            style={{resizeMode:'center'}}/>
        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e67e22',
  }
});