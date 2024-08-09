import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';
import {SimpleButtonProps} from './types';

const SimpleButton = (props: SimpleButtonProps) => {
  const {title, onPress} = props;

  return (
    <Pressable
      style={({pressed}) => {
        return [styles.button, pressed && styles.pressed];
      }}
      onPress={onPress}>
      <Text style={styles.basicText}>{title}</Text>
    </Pressable>
  );
};

export default SimpleButton;
