import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { purple, white } from './utils/colors';

const Stack = createStackNavigator();

function DeckListStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen {...RouteConfigs['DeckList']} />
      <Stack.Screen {...RouteConfigs['Deck']} />
      <Stack.Screen {...RouteConfigs['AddCard']} />
      <Stack.Screen {...RouteConfigs['Quiz']} />
    </Stack.Navigator>
  );
}

const RouteConfigs = {
  DeckListStack: {
    name: "DeckListStack",
    component: DeckListStackScreen,
    options: {
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='library-books' size={30} color={tintColor} />, 
      title: 'Decks'
    }
  },
  DeckList: {
    name: "DeckList",
    component: DeckList,
    options: {
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
  },
  Deck: {
    component: Deck,
    name: "Deck",
    options: ({ route }) => ({ title: route.params.name })
  },
  AddCard: {
    component: AddCard,
    name: "AddCard",
    options: ({ route }) => ({ title: `Add Card - ${route.params.name}` })
  },
  Quiz: {
    component: Quiz,
    name: "Quiz",
    options: ({ route }) => ({ title: `Quiz - ${route.params.name}` })
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
      <Tab.Screen {...RouteConfigs['DeckListStack']} />
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
