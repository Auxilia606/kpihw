import {ViewStyle} from 'react-native';

export type ProgressProps = {
  progress: number;
  color?: ViewStyle['backgroundColor'];
  unfilledColor?: ViewStyle['backgroundColor'];
} & Pick<
  ViewStyle,
  'borderWidth' | 'borderColor' | 'borderRadius' | 'width' | 'height'
>;
