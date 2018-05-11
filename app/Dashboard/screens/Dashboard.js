import React, { Component } from 'react';
import { StyleSheet, Image, AsyncStorage } from 'react-native';
import { 
  Container, Content, Text, Button, View,
  Tab, Tabs, TabHeading, Icon, Badge, Header, Fab,
  Left, Right, Body, Title, Segment, List, ListItem, 
  Thumbnail
} from 'native-base';
import { connect } from 'react-redux';
import { allOngoingHomeWork, allDoneHomework, allPendingHomework } from '../actions';

import OngoingList from '../components/OngoingList';
import DoneList from '../components/DoneList';
import PendingList from '../components/PendingList';

class Dashboard extends Component{
  
  componentDidMount(){
    AsyncStorage.multiGet(['@objectId:key'], (error, result) => {
      if(result){
        if(result[0][1] !== null){
          this.props.dispatch(allOngoingHomeWork(result[0][1]))
          this.props.dispatch(allDoneHomework(result[0][1]))
          this.props.dispatch(allPendingHomework(result[0][1]))
        }
      }
    });
  }

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
        <Content>
          <ListItem itemDivider>
            <Text>Ongoing</Text>
          </ListItem> 
          <OngoingList/>
          <ListItem itemDivider>
            <Text>Done</Text>
          </ListItem> 
          <DoneList/>
          <ListItem itemDivider>
            <Text>Pending</Text>
          </ListItem> 
          <PendingList/>
        </Content>
        <Fab
          style={{ backgroundColor: '#d35400' }}
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