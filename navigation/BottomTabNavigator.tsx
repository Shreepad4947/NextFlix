/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/HomeScreen/HomeScreen';
import TabTwoScreen from '../screens/SearchScreen';
import SearchScreen from '../screens/SearchScreen';
import DownloadScreen from '../screens/DownloadScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import { BottomTabParamList,LibraryParamList, HomeParamList, SearchParamList,DownloadParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: 'black' }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Download"
        component={DownloadNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false  }}
      />
      <HomeStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
        options={{title:'' }}
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
