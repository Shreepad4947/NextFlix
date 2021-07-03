/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/SearchScreen';
import SearchScreen from '../screens/SearchScreen';
import DownloadScreen from '../screens/DownloadScreen';
import LibraryScreen from '../screens/LibraryScreen';
import { BottomTabParamList,LibraryParamList, HomeParamList, SearchParamList,DownloadParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Download"
        component={DownloadNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" size={25} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerShown: false }}
      />
    </LibraryStack.Navigator>
  );
}
const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
}
const DownloadStack = createStackNavigator<DownloadParamList>();

function DownloadNavigator() {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name="DownloadScreen"
        component={DownloadScreen}
        options={{ headerShown: false }}
      />
    </DownloadStack.Navigator>
  );
}
