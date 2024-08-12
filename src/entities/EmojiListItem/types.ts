import {ImageURISource} from 'react-native';

export enum Emotion {
  TRUST = '신뢰',
  FEAR = '두려움',
  SURPRISE = '놀라움',
  SADNESS = '슬품',
  DISGUST = '혐오',
  ANGER = '분노',
  ANTICIPATION = '기대',
  JOY = '기쁨',
}

export type EmojiItemType = {
  key: string;
  title: Emotion;
  source: ImageURISource;
};

export type EmojiListItemProps = {
  item: EmojiItemType & {isSelected: boolean};
  index: number;
  onPressItem: (itemIndex: number) => void;
};
