import {PropsWithChildren} from 'react';
import {TextStyle} from 'react-native';

import styles from './styles';

export type CustomTextProps = PropsWithChildren & {
  fontSize?: Extract<keyof typeof styles, 'sm' | 'md' | 'lg'>;
  fontWeight?: Extract<keyof typeof styles, 'bold' | 'normal' | 'medium'>;
} & Pick<TextStyle, 'color' | 'textAlign'>;
