import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';
import {SimpleButtonProps} from './types';

const SimpleButton = (props: SimpleButtonProps) => {
  const {
    title,
    onPress,
    disabled,
    disabledStyle,
    pressedStyle,
    style,
    ellipsizeMode,
    numberOfLines,
  } = props;

  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => {
        return [
          styles.button,
          style,
          disabled && styles.disabled,
          disabled && disabledStyle,
          pressed && styles.pressed,
          pressed && pressedStyle,
        ];
      }}
      onPress={onPress}>
      <Text
        style={styles.basicText}
        ellipsizeMode={ellipsizeMode}
        numberOfLines={numberOfLines}>
        {title}
      </Text>
    </Pressable>
  );
};

export default SimpleButton;
