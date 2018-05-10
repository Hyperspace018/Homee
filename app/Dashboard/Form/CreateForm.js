import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Form, Item, Input, Button, Text, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

const InputTypeText = (props) => {

  return(
    <View>
      <Label>{props.label}</Label>
      <Item regular>
        <Input 
          name={props.name} { ...props } 
          onChangeText={text => {props.input.onChange(text)}} 
          value={props.input.value}/>
      </Item>
    </View>
  );

}

class CreateForm extends Component{

  render(){

    const { handleSubmit } = this.props;

    return(
      <Form style={{padding: 10}}>
        <Field component={InputTypeText} name="title" label="Title"/>
        <Field component={InputTypeText} name="teacher" label="Teacher"/>
        <Field component={InputTypeText} name="deadline" label="Deadline"/>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", top: 250, left: 0, right: 0, justifyContent: 'space-evenly' }}>
          <Button block style={{backgroundColor: "#2ecc71", width: 170}} onPress={ handleSubmit }>
            <Text>Create</Text>
          </Button>
          <Button block style={{backgroundColor: "#d63031", width: 170}}
            onPress={()=> this.props.navigation.navigate("Main")}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </Form>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  buttonContainer:{
    padding: 10,
    backgroundColor: '#ffffff'
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

export default reduxForm({
  form:'homeworks'
})(CreateForm)