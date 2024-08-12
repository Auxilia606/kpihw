import {HomeStackParamList} from '@pages/types';
import {Emotion} from '@entities/EmojiListItem';

export type HomeTabAtomType = {
  screenStack: string[];
};

export type HomeHeaderAtom = {
  selectedEmoji?: Emotion;
  progress?: number;
};

export type HomeTabScreenType = keyof HomeStackParamList;
