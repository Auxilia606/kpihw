import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const {color, size} = props;

  return <MaterialCommunityIcons name="home" {...{color, size}} />;
};

export const ChatIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const {color, size} = props;

  return <MaterialCommunityIcons name="chat" {...{color, size}} />;
};

export const AccountIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const {color, size} = props;

  return <MaterialCommunityIcons name="account" {...{color, size}} />;
};

export const CheckIcon = (props: {color: string; size: number}) => {
  const {color, size} = props;

  return <MaterialCommunityIcons name="check" {...{color, size}} />;
};
