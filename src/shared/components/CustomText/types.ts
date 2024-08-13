import {PropsWithChildren} from 'react';
import {StyleProp, TextStyle} from 'react-native';

import styles from './styles';

export type CustomTextProps = PropsWithChildren & {
  fontSize?: Extract<keyof typeof styles, 'sm' | 'md' | 'lg' | 'xl'>;
  fontWeight?: Extract<keyof typeof styles, 'bold' | 'normal' | 'medium'>;
  style?: StyleProp<TextStyle>;
} & Pick<TextStyle, 'color' | 'textAlign'>;
