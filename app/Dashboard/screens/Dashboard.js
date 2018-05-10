import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { 
  Container, Content, Text, Button, View,
  Tab, Tabs, TabHeading, Icon, Badge, Header, Fab,
  Left, Right, Body, Title, Segment, List, ListItem, 
  Thumbnail
} from 'native-base';
import { connect } from 'react-redux';

import OngoingList from '../components/OngoingList';

class Dashboard extends Component{

  render(){
    return(
      <Container>
        <Header style={{backgroundColor:"#e67e22"}}>
          <Body style={{alignItems: "center"}}>
            <Image 
              source={require("../../../assets/images/Homee.png")}
              style={{width: 200, height: 35, resizeMode: "center"}}/>
          </Body>
        </Header>
        
        <OngoingList/>

        <Fab
          style={{ backgroundColor: '#2ecc71' }}
          position="bottomRight"
          onPress={() => this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'Create'
          })}>
          <Icon name="add"/>
        </Fab>
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
  }
});

const mapStateToProps = (state) => ({
  homeworkReducers: state.homeworkReducers
})

export default connect(mapStateToProps)(Dashboard)