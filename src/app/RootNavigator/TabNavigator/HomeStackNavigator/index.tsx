import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@pages/Home';
import RecordFeeling from '@pages/RecordFeeling';
import RecordFeelingEmoji from '@pages/RecordFeelingEmoji';
import SelectChatbot from '@pages/SelectChatbot';
import {HomeStackParamList} from '@pages/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

// const HomeStackNavigator = (props: TabScreenProps<'HomeNavigator'>) => {
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecordFeeling" component={RecordFeeling} />
      <Stack.Screen name="RecordFeelingEmoji" component={RecordFeelingEmoji} />
      <Stack.Screen name="SelectChatbot" component={SelectChatbot} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
