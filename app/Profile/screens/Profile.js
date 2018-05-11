import React, { Component } from 'react';
import { StyleSheet, Image, Platform } from 'react-native';
import { 
  Container, Content, Text, Button, View,
  Header, Body, Title, Card, CardItem
} from 'native-base';

export default class ExampleScreen1 extends Component{

  render(){
    return(
      <Container>
        <Content>
          <Card style={{width: 355, height: 535}}>
            <View style={styles.profiles}>
              <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}}
                style={styles.imageFrame} />            
              <Text style={styles.fullName}>Muhammad Isa Wijaya Kusuma</Text>
              <Text style={styles.emails}>hyperspace018@gmail.com</Text>
              <Text style={styles.performance}>Good</Text>
              <Text style={styles.summary}>Summary</Text>
            </View>
            <View style={styles.statisticsLabel}>
              <Text style={{alignItems:"center", paddingRight: 20}}>Ongoing</Text>  
              <Text style={{alignItems:"center"}}>Done</Text>
              <Text style={{alignItems:"center", paddingLeft: 20}}>Pending</Text>
            </View>
            <View style={styles.statisticsButton}>
              <Button rounded style={styles.ongoingButton}>
                <Text style={{textAlign:"center"}}>70</Text>
              </Button>
              <Button rounded style={styles.doneButton}>
                <Text style={{textAlign:"center"}}>10</Text>
              </Button>
              <Button rounded style={styles.pendingButton}>
                <Text style={{textAlign:"center"}}>20</Text>
              </Button>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  profiles:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    bottom: 95
  },
  statisticsButton:{
    flexDirection: "row", 
    flex: 1, 
    position: "absolute", 
    bottom:50, 
    left: 0, 
    right: 0, 
    justifyContent: 'space-evenly' 
  },
  statisticsLabel:{
    flexDirection: "row", 
    flex: 1, 
    position: "absolute", 
    bottom:20, 
    left: 0, 
    right: 0, 
    justifyContent: 'space-evenly' 
  },
  performance:{
    top: 55,
    fontSize: 65,
    color: "#2ecc71"
  },
  summary:{
    top: 50,
    color: '#95a5a6'
  },
  ongoingButton:{
    backgroundColor: "#3498db", 
    alignItems:"center",
    width: 70
  },
  doneButton:{
    backgroundColor: "#2ecc71", 
    alignItems:"center",
    width: 70
  },
  pendingButton:{
    backgroundColor: "#f1c40f", 
    alignItems:"center",
    width: 70
  },
  imageFrame:{
    width: 150, 
    height: 150, 
    borderRadius: 150/2
  },
  fullName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  emails: {
    textAlign: 'center',
    color: '#95a5a6',
    marginBottom: 5,
  },
});