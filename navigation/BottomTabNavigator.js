import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Login from '../screens/Login';
import Test from '../screens/Teste';
import Teste from '../screens/Teste';
import Testee from '../screens/Teste';
import Feed from '../screens/Feed';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          height: 70,
          borderTopWidth: 0
        }
      }}
    >
      <BottomTab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list-box" size={40} />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarVisible: false,
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" size={40} />,
        }}
      />

      <BottomTab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarVisible: false,
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" size={50} />,
        }}
      />

      <BottomTab.Screen
        name="Teste"
        component={Teste}
        options={{
          tabBarVisible: false,
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" size={40} />,
        }}
      />
      <BottomTab.Screen
        name="Testee"
        component={Testee}
        options={{
          tabBarVisible: false,
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-navigate" size={40} />,
        }}
      />
    </ BottomTab.Navigator >
  );
} 