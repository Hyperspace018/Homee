import React from 'react';
import { Icon } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';

// Replace imported screen with your screen
// Main Screens
import Splash from '../Splash/screens/Splash';
import Dashboard from '../Dashboard/screens/Dashboard';
import Profile from '../Profile/screens/Profile';
import Settings from '../Settings/screens/Settings';
import Register from '../Register/screens/Register';

// Sub Screens
import Create from '../Dashboard/screens/Create';

const Main = TabNavigator({

  Dashboard:{
    screen: Dashboard,
    navigationOptions:{
      header: null,
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="chart" type="EvilIcons" style={{color: focused ? tintColor : '#ffffff'}}/>
      }
    }
  },

  Profile:{
    screen: Profile,
    navigationOptions:{
      header: null,
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="user" type="EvilIcons" style={{color: focused ? tintColor : '#ffffff'}}/>
      }
    }
  },

  Settings:{
    screen: Settings,
    navigationOptions:{
      header: null,
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="gear" type="EvilIcons" style={{color: focused ? tintColor : '#ffffff'}}/>
      }
    }
  },
  
  
},{
  activeTintColor: '#000000',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: '#e67e22'
    },
    style: {
      backgroundColor: '#e67e22'
    }
  }
})

const RootNavigator = StackNavigator({

  Main:{
    screen: Main
  },

  Splash:{
    screen: Splash,
    navigationOptions:{
      header: null
    }
  },

  Create:{
    screen: Create,
    navigationOptions:{
      header: null
    }
  },

  Register:{
    screen: Register,
    navigationOptions:{
      header: null
    }
  }

})

export default RootNavigator;