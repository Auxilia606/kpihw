import React from 'react';
import {Text} from 'react-native';

import styles from './styles';
import {CustomTextProps} from './types';

const CustomText = (props: CustomTextProps) => {
  const {
    children,
    fontSize = 'md',
    fontWeight = 'normal',
    color = '#000000',
    textAlign = 'auto',
    style,
  } = props;

  return (
    <Text
      style={[styles[fontSize], styles[fontWeight], {color, textAlign}, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
