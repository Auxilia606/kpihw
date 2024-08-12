import {HomeStackParamList} from '@pages/types';
import {Emotion} from '@entities/EmojiListItem';

export type HomeTabAtomType = {
  screenStack: string[];
  selectedEmoji?: Emotion;
};

export type HomeTabScreenType = keyof HomeStackParamList;
