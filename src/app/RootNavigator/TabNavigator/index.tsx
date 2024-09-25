import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ContentList from '@pages/ContentList';
import EmotionBeadList from '@pages/EmotionBeadList';
import Settings from '@pages/Settings';
import {TabParamList} from '@pages/types';

import HomeStackNavigator from './HomeStackNavigator';
// import {AccountIcon, ChatIcon, HomeIcon} from './tabBarIcon';

const Tab = createBottomTabNavigator<TabParamList>();

// const TabNavigator = (props: RootStackScreenProps<'Tab'>) => {
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {justifyContent: 'center'},
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontSize: 16,
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
        name="EmotionBeadList"
        component={EmotionBeadList}
        options={{
          tabBarLabel: '감정구슬',
        }}
      />
      <Tab.Screen
        name="ContentList"
        component={ContentList}
        options={{
          tabBarLabel: '컨텐츠',
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
