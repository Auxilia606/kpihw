import {PropsWithChildren} from 'react';
import {TextInputProps, ViewStyle} from 'react-native';

export type TextInputLineProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  lineColor?: ViewStyle['backgroundColor'];
} & Pick<TextInputProps, 'numberOfLines' | 'editable'>;

export type BackgroudLineProps = PropsWithChildren &
  Pick<TextInputLineProps, 'numberOfLines' | 'lineColor'>;
