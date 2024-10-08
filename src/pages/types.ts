import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Main: undefined;
  Detail: undefined;
  Tab: NavigatorScreenParams<TabParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  RecordFeeling: undefined;
  RecordFeelingEmoji: undefined;
  RecordFeelingWord: undefined;
  RecordFeelingWordDetail: undefined;
  MakeEmotionBead: undefined;
  SelectChatbot: undefined;
  Chat: {id: string};
};

export type TabParamList = {
  HomeNavigator: {screen: keyof HomeStackParamList};
  Settings: {text: string};
  EmotionBeadList: undefined;
  ContentList: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    BottomTabScreenProps<TabParamList, 'HomeNavigator'>
  >;
