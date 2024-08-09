import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Chat from '@pages/Chat';
import Settings from '@pages/Settings';
import {TabParamList} from '@pages/types';

import HomeStackNavigator from './HomeStackNavigator';
import {AccountIcon, ChatIcon, HomeIcon} from './tabBarIcon';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 4,
          paddingBottom: 8,
          height: 48,
        },
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: '챗',
          tabBarIcon: ChatIcon,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: AccountIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
