import {PressableProps, StyleProp, ViewStyle} from 'react-native';

export type SimpleButtonProps = {
  onPress?: () => void;
  title: string;
  pressedStyle?: ViewStyle;
  disabledStyle?: ViewStyle;
  style?: StyleProp<ViewStyle>;
} & Pick<PressableProps, 'disabled'>;
