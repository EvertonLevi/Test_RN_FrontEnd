import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { withBadge, Badge, Icon } from 'react-native-elements'


import TabBarIcon from '../components/TabBarIcon';
import CenterButton from '../components/CenterButton';
import Login from '../screens/Login';
import Test from '../screens/Teste';
import Teste from '../screens/Teste';
import Testee from '../screens/Teste';
import Feed from '../screens/Feed';

import colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Login';

const tabOptions = {
  tabBarOptions: {
    borderTopWidth: 2,
    borderBottomColor: colors.roxo
  }
}

const MessageBadge = withBadge(1)(Icon)

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          borderTopWidth: 2,
          borderTopColor: colors.cinzaEscuro,
          height: 70,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          elevation: 2,
          shadowRadius: 3,
          shadowOffset: { width: 1, height: 2 },
        },
        activeTintColor: colors.roxo,
        inactiveTintColor: colors.cinzaEscuro,

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
        name="CenterButton"
        component={Test}
        options={{
          tabBarVisible: false,
          title: '',
          tabBarIcon: () => <CenterButton />,
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