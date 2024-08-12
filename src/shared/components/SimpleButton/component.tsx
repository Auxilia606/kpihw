import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';
import {SimpleButtonProps} from './types';

const SimpleButton = (props: SimpleButtonProps) => {
  const {title, onPress, disabled} = props;

  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => {
        return [
          styles.button,
          disabled && styles.disabled,
          pressed && styles.pressed,
        ];
      }}
      onPress={onPress}>
      <Text style={styles.basicText}>{title}</Text>
    </Pressable>
  );
};

export default SimpleButton;
