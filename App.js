import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import { purple, white } from './utils/colors';

const RouteConfigs = {
  DeckList: {
    name: "Decks",
    component: DeckList,
    options: {
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='library-books' size={30} color={tintColor} />, 
      title: 'Decks'
    }
  }, 
  AddDeck: {
    component: AddDeck,
    name: "Add Deck",
    options: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />, 
      title: 'Add Deck'
    }
  }
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 55,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tab = Platform.OS === 'ios'
        ? createBottomTabNavigator() 
        : createMaterialTopTabNavigator();

const TabNav = () =>(
  <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen {...RouteConfigs['DeckList']} />
      <Tab.Screen {...RouteConfigs['AddDeck']} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};
