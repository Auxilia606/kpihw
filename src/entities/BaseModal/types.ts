import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type BaseModalProps = PropsWithChildren & {
  visible: boolean;
  contentStyle?: StyleProp<ViewStyle>;
};
