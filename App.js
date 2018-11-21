// IMPORT LIBRARY
import React, { Component } from "react";
import { View, ScrollView } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons'


// IMPORT BOTTOM TAB SCREENS
import Home from './screens/Home'
import Trending from './screens/Trending'
import Subscriptions from './screens/Subscriptions'
import Library from './screens/Library';

// IMPORT TOP TAB SCREENS
import MessagesTab from './screens/MessagesTab';
import NotificationsTab from './screens/Notifications'


// IMPORT COMPONENTS 
import Navbar from './components/NavBar';
import ScrollInbox from './components/ScrollInbox';

// COMPONENT FOR SCROLL INBOX
export default class App extends Component {
  render(){
    return(
      <Root style={{ backgroundColor: "#FFF" }} />
    )
  }
}


// ROUTE SETTINGS GOES HERE
// CHILD ROOT MUST BE DECLARE FIRST BEFORE ROOT
// SO ROOT MUST BE THE LAST DECLARATION

const MaterialTopTabInbox = createMaterialTopTabNavigator({
  Messages: MessagesTab,
  Notifications: NotificationsTab,
},
{
  // initialRouteName: "Notifications",
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "#606060",
    fontSize: 15,
    style: {
      backgroundColor: "#FFF",
    },
    indicatorStyle: {
      backgroundColor: "#000"
    }
  }
});

const StackInbox = createStackNavigator({
  Index: {
    screen: MaterialTopTabInbox,
    navigationOptions: {
      // headerMode: <Navbar />,
      // headerTitle: <Navbar style />
      header: (
        <View style={{ height: 55 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Navbar style={{ elevation: 0 }} />
          </ScrollView>
        </View >
      )
    }
  }
}
);

const RootBottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarLabel: 'Trending',
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="whatshot" size={25} color={tintColor} />
        )
      }
    },
    Subscriptions: {
      screen: Subscriptions,
      navigationOptions: {
        tabBarLabel: 'Subscriptions',
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="subscriptions" size={25} color={tintColor} />
        )
      }
    },
    Inbox: {
      screen: StackInbox,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="mail" size={25} color={tintColor} />
        )
      }
    },
    Library: {
      screen: Library,
      navigationOptions: {
        tabBarLabel: 'Library',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="folder" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Library",
    backgroundColor: "#FFF",
    tabBarOptions: {
      activeTintColor: '#ff0000',
      inactiveTintColor: '#616161',
      activeBackgroundColor: '#FFF',
      inactiveBackgroundColor: '#FFF',
      labelStyle: {
        fontSize: 11
      }
      
    }
  }
)

const Root = createStackNavigator({
  Root: RootBottomTab
},
{
  headerMode: "none"
});