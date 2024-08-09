import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Chat from '@pages/Chat';
import Settings from '@pages/Settings';
import {TabParamList} from '@pages/types';

import HomeStackNavigator from './HomeStackNavigator';
// import {AccountIcon, ChatIcon, HomeIcon} from './tabBarIcon';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 48,
        },
        tabBarItemStyle: {justifyContent: 'center'},
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontSize: 20,
          letterSpacing: -20 * 0.05,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: '챗',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '설정',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
