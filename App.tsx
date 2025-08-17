import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Start from './src/screens/StackScreens/Start';
import Login from './src/screens/StackScreens/Login';
import Signup from './src/screens/StackScreens/Signup';
import Welcome from './src/screens/StackScreens/Welcome';

import Home from './src/screens/BottomTabScreens/Home';
import Messages from './src/screens/BottomTabScreens/Messages';
import Profile from './src/screens/BottomTabScreens/Profile';
import Proposal from './src/screens/BottomTabScreens/Proposal';
import Search from './src/screens/BottomTabScreens/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#1CC4A0',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          position: 'absolute',
          margin: '2%',
          height: "7%",
          width: "96%",
          borderRadius: 15,
          bottom: '3.5%',
          backgroundColor: '#1E293B',
        },
        headerStyle: { backgroundColor: '#1E293B' },
        headerTintColor: '#fff',
        headerShown: false

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./src/screens/assets/home.png')}
              style={{ width: 23, height: 23, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./src/screens/assets/search.png')}
              style={{ width: 23, height: 23, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Proposals"
        component={Proposal}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./src/screens/assets/application.png')}
              style={{ width: 23, height: 23, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./src/screens/assets/message.png')}
              style={{ width: 23, height: 23, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./src/screens/assets/user.png')}
              style={{ width: 23, height: 23, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="start" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const NexuraConnect = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default NexuraConnect;
