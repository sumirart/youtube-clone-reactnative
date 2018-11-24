// IMPORT LIBRARY
import React, { Component } from "react";
import { View, ScrollView, Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomIcon from './CustomIcon';


// IMPORT BOTTOM TAB SCREENS
import Home from './screens/Home'
import Trending from './screens/Trending'
import Subscriptions from './screens/Subscriptions'
import Library from './screens/Library';


// IMPORT STACK NIH CUYSZZZZZ
import Profile from './screens/Profile';
import Video from './components/Video';
import Search from './screens/Search';


// IMPORT TOP TAB SCREENS
import MessagesTab from './screens/MessagesTab';
import NotificationsTab from './screens/Notifications'


// IMPORT COMPONENTS 
import Navbar from './components/NavBar';


// ROUTE SETTINGS GOES HERE
// CHILD ROOT MUST BE DECLARE FIRST BEFORE ROOT
// SO ROOT MUST BE THE LAST DECLARATION

const MaterialTopTabInbox = createMaterialTopTabNavigator({
  Messages: MessagesTab,
  Notifications: NotificationsTab,
},
{
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

const StackHome = createStackNavigator({
  Home: Home,
  Video: Video,
  Profile: Profile,
  Search: Search
}, {
    headerMode: "none"
});

const StackTrending = createStackNavigator({
  Trending: Trending,
  Video: Video,
  Profile: Profile,
  Search: Search
}, {
    headerMode: "none"
});

const StackSubscriptions = createStackNavigator({
  Subscriptions: Subscriptions,
  Video: Video,
  Profile: Profile,
  Search: Search
}, {
    headerMode: "none"
});

const StackLibrary = createStackNavigator({
  Library: Library,
  Video: Video,
  Profile: Profile,
  Search: Search
}, {
  headerMode: "none"
});

const StackInbox = createStackNavigator({
  Index: {
    screen: MaterialTopTabInbox,
    navigationOptions: {
      header: (
        <View style={{ height: 55 }}>
          <ScrollView>
            <Navbar style={{ elevation: 0 }} />
          </ScrollView>
        </View>
      )
    }
  },
  Profile: Profile,
  Search: Search
}
);

const RootBottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="home" size={23} color={tintColor} />
        )
      }
    },
    Trending: {
      screen: StackTrending,
      navigationOptions: {
        tabBarLabel: 'Trending',
        tabBarIcon: ( { tintColor } ) => (
          <CustomIcon name="trending" size={27} color={tintColor} />
        )
      }
    },
    Subscriptions: {
      screen: StackSubscriptions,
      navigationOptions: {
        tabBarLabel: 'Subscriptions',
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="subscriptions" size={22} color={tintColor} />
        )
      }
    },
    Inbox: {
      screen: StackInbox,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="mail" size={22} color={tintColor} />
        )
      }
    },
    Library: {
      screen: StackLibrary,
      navigationOptions: {
        tabBarLabel: 'Library',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="folder" size={22} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    backgroundColor: "#FFF",
    tabBarOptions: {
      activeTintColor: '#ff0000',
      inactiveTintColor: '#616161',
      activeBackgroundColor: '#FFF',
      inactiveBackgroundColor: '#FFF',
      labelStyle: {
        fontSize: 10,
        paddingBottom: 5
      }
      
    }
  }
)

export default createStackNavigator({
  Root: RootBottomTab
},
{
  headerMode: "none"
});