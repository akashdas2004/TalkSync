import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar, StyleSheet } from 'react-native';

// Screens
import ChatsScreen from './screens/ChatsScreen';
import ChatScreen from './screens/ChatScreen';
import StatusScreen from './screens/StatusScreen';
import CallsScreen from './screens/CallsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Constants
import { COLORS } from './constants';

// Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

console.log('✅ App loaded');

// Tab Navigation (bottom tab look-alike using top tabs)
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.lightText,
        tabBarStyle: { backgroundColor: COLORS.secondary },
        tabBarIndicatorStyle: { backgroundColor: '#FFFFFF' },
        tabBarLabelStyle: { fontWeight: 'bold' },
      }}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.secondary} barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.secondary,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ title: 'TalkSync' }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
