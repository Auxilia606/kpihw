import {HomeStackParamList} from '@pages/types';
import {Emotion} from '@entities/EmojiListItem';

export type HomeTabAtomType = {
  screenStack: string[];
};

export type HomeHeaderAtom = {
  selectedEmoji?: Emotion;
  selectedEmotion?: {korName: string; engName: string};
  progress?: number;
};

export type HomeTabScreenType = keyof HomeStackParamList;
