import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { 
  Container, Content, Text, View, Button, Input, Item, Label, Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { postUserRegistration } from '../actions';

class Register extends Component{

  state = {
    registration:{
      name: "",
      email: "",
      password: ""
    }
  }

  handleSubmit(){
    this.props.dispatch(postUserRegistration(this.state.registration))
    .then((result) => {
      alert("Success")
    })
    .catch((error) => alert(error))
  }

  render(){
    return(
      <Container style={styles.container}>
        <Content>
          <View style={styles.imagePosition}>
            <Image source={require("../../../assets/images/Homee.png")}
              style={{resizeMode: "center"}}/>
          </View>
          <View style={styles.form}>
            <Label style={styles.inputEntry}>Name</Label>
            <Item regular>
              <Input 
                onChangeText={(text) => this.setState({ registration:{ ...this.state.registration, name: text }})}
                placeholder="Type your full name"
                placeholderTextColor='#dfe6e9'/>
            </Item>
            <Label style={styles.inputEntry}>Email</Label>
            <Item regular>
              <Input 
                onChangeText={(text) => this.setState({ registration:{ ...this.state.registration, email: text }})}
                placeholder="Type your current email address"
                placeholderTextColor='#dfe6e9'/>
            </Item>
            <Label style={styles.inputEntry}>Password</Label>
            <Item regular>
              <Input 
                onChangeText={(text) => this.setState({ registration:{ ...this.state.registration, password: text }})}
                placeholder="Type your secure password"
                placeholderTextColor='#dfe6e9'
                secureTextEntry/>
            </Item>
            <Button block style={styles.registerButton} onPress={() => this.handleSubmit()}>
              {this.props.registerReducers.isLoading ? (
                <Spinner color="#ffffff"/>
              ) : (
                <Text>Register</Text>
              )}
            </Button>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.additionalOption}>Already have an account? Login Now!</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F5FCFF'
  },
  imagePosition: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  form:{
    padding: 10,
    backgroundColor: '#F5FCFF'
  },
  inputEntry:{
    paddingTop: 10
  },
  registerButton:{
    backgroundColor: "#e67e22", 
    marginTop: 20
  },
  additionalOption:{
    color: "#e67e22", 
    textAlign: "center", 
    marginTop: 20
  }
});

const mapStateToProps = (state) => ({
  registerReducers: state.registerReducers
})

export default connect(mapStateToProps)(Register);