import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { 
  Container, Content, Text, View, Button, Input, Item, Label, Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { postUserLogin } from '../actions';

class Login extends Component{

  state = {
    credential:{
      email: "",
      password: ""
    }
  }

  handleSubmit(){
    this.props.dispatch(postUserLogin(this.state.credential))
    .then((result) => {
      AsyncStorage.multiSet([
        ['@objectId:key', result.value.data.objectId],
      ]);
      this.props.dispatch({
        type: "Navigation/NAVIGATE",
        routeName: "Main"
      })
    })
    .catch((error) => alert(JSON.stringify(error)))
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
            <Label style={styles.inputEntry}>Email</Label>
            <Item regular>
              <Input 
                onChangeText={(text) => this.setState({ credential:{ ...this.state.credential, email: text }})}
                placeholder="Your email"
                placeholderTextColor='#dfe6e9'/>
            </Item>
            <Label style={styles.inputEntry}>Password</Label>
            <Item regular>
              <Input 
                onChangeText={(text) => this.setState({ credential:{ ...this.state.credential, password: text }})}
                placeholder="Your password"
                placeholderTextColor='#dfe6e9'
                secureTextEntry/>
            </Item>
            <Button block style={styles.registerButton} onPress={() => this.handleSubmit()}>
              {this.props.loginReducers.isLoading ? (
                <Spinner color="#ffffff"/>
              ) : (
                <Text>Login</Text>
              )}
            </Button>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
              <Text style={styles.additionalOption}>Don't have an account? Register Now!</Text>
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
    paddingTop: 90,
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
  loginReducers: state.loginReducers
})

export default connect(mapStateToProps)(Login);