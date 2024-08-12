import {PressableProps} from 'react-native';

export type SimpleButtonProps = {
  onPress?: () => void;
  title: string;
} & Pick<PressableProps, 'disabled'>;
