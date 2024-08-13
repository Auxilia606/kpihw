import {ImageSourcePropType} from 'react-native';

export type ChatbotProps = {
  name: string;
  description: string;
  profile?: ImageSourcePropType;
  // height?: number;
  type?: undefined | 'unlock';
};
