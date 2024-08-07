import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Chat from '@pages/Chat';
import Home from '@pages/Home';
import Settings from '@pages/Settings';
import {TabParamList} from '@pages/types';

import {AccountIcon, ChatIcon, HomeIcon} from './tabBarIcon';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 4,
          paddingBottom: 8,
          height: 48,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
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
