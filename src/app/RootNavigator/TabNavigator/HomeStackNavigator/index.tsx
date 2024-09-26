import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chat from '@pages/Chat';
import Home from '@pages/Home';
import MakeEmotionBead from '@pages/MakeEmotionBead';
import RecordFeeling from '@pages/RecordFeeling';
import RecordFeelingEmoji from '@pages/RecordFeelingEmoji';
import RecordFeelingWord from '@pages/RecordFeelingWord';
import RecordFeelingWordDetail from '@pages/RecordFeelingWordDetail';
import SelectChatbot from '@pages/SelectChatbot';
import {HomeStackParamList} from '@pages/types';
import HomeTabProgress from '@widgets/HomeTabProgress';

const Stack = createNativeStackNavigator<HomeStackParamList>();

// const HomeStackNavigator = (props: TabScreenProps<'HomeNavigator'>) => {
const HomeStackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="RecordFeeling" component={RecordFeeling} />
        <Stack.Screen
          name="RecordFeelingEmoji"
          component={RecordFeelingEmoji}
        />
        <Stack.Screen name="RecordFeelingWord" component={RecordFeelingWord} />
        <Stack.Screen
          name="RecordFeelingWordDetail"
          component={RecordFeelingWordDetail}
        />
        <Stack.Screen name="MakeEmotionBead" component={MakeEmotionBead} />
        <Stack.Screen name="SelectChatbot" component={SelectChatbot} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
      <HomeTabProgress />
    </>
  );
};

export default HomeStackNavigator;
