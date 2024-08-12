import {ViewStyle} from 'react-native';

import {SimpleButtonProps} from '../SimpleButton/types';

export type SelectableButtonProps = SimpleButtonProps & {
  isSelected: boolean;
  selectedStyle?: ViewStyle;
};
