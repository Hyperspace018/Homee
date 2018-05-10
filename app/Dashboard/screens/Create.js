import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
  Container, Content
} from 'native-base';
import { connect } from 'react-redux';
import { postOngoingHomeWork, allOngoingHomeWork } from '../actions';
import CreateForm from '../Form/CreateForm';

class Create extends Component{

  handleSubmit = (value) => {
    this.props.dispatch(postOngoingHomeWork(value)).then(() => {
      this.props.dispatch(allOngoingHomeWork())
      this.props.dispatch({
        type: "Navigation/BACK",
        routeName: "Main"
      })
    })
  }

  render(){
    return(
      <Container style={{backgroundColor: '#ffffff'}}>
        <CreateForm {...this.props} onSubmit={this.handleSubmit}/>
      </Container>
    );
  }

}

export default connect()(Create);