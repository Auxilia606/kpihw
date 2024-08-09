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
  } = props;

  return (
    <Text style={[styles[fontSize], styles[fontWeight], {color, textAlign}]}>
      {children}
    </Text>
  );
};

export default CustomText;
