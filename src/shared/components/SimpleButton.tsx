import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  ViewStyle,
} from 'react-native';

export type SimpleButtonProps = {
  onPress?: () => void;
  title: string;
  pressedStyle?: ViewStyle;
  disabledStyle?: ViewStyle;
  style?: StyleProp<ViewStyle>;
} & Pick<PressableProps, 'disabled'> &
  Pick<TextProps, 'ellipsizeMode' | 'numberOfLines'>;

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

const styles = StyleSheet.create({
  basicText: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.1,
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },
  disabled: {
    backgroundColor: '#bbbbbb',
    borderColor: '#aaaaaa',
  },
  pressed: {backgroundColor: '#aaaaaa'},
});

export default SimpleButton;
