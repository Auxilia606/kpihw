import {HomeStackParamList} from '@pages/types';

export type HomeTabAtomType = {
  screenStack: string[];
};

export type HomeTabScreenType = keyof HomeStackParamList;
