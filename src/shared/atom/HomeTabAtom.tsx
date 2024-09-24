import {useCallback} from 'react';
import {atom, useAtom} from 'jotai';

import {HomeStackParamList} from '@pages/types';
import {Emotion} from '@entities/EmojiListItem';

const homeTabAtom = atom<HomeTabAtomType>({
  screenStack: [],
});

const homeHeaderAtom = atom<HomeHeaderAtom>({
  selectedEmoji: undefined,
  selectedEmotion: undefined,
  progress: undefined,
});

export const useHomeTabAtom = () => {
  const [value] = useAtom(homeTabAtom);

  const push = useCallback(
    (screen: string) => {
      value.screenStack.push(screen);
    },
    [value.screenStack],
  );

  const pop = useCallback(() => {
    return value.screenStack.pop();
  }, [value.screenStack]);

  const reset = useCallback(() => {
    value.screenStack.length = 0;
  }, [value.screenStack]);

  const check = useCallback(() => {
    return !!value.screenStack.length;
  }, [value.screenStack.length]);

  return {
    push,
    pop,
    reset,
    check,
  };
};

export const useHomeHeaderAtom = () => {
  const [value, setValue] = useAtom(homeHeaderAtom);

  const setEmoji = useCallback(
    (emotion: Emotion | undefined) => {
      setValue(prev => ({...prev, selectedEmoji: emotion}));
    },
    [setValue],
  );

  const setEmotion = useCallback(
    (emotion: HomeHeaderAtom['selectedEmotion']) => {
      setValue(prev => ({...prev, selectedEmotion: emotion}));
    },
    [setValue],
  );

  const setProgress = useCallback(
    (input: number | undefined) => {
      setValue(prev => ({
        ...prev,
        progress: input && Math.max(Math.min(input, 1), 0),
      }));
    },
    [setValue],
  );

  return {
    setEmoji,
    setEmotion,
    setProgress,
    progress: value.progress,
    selectedEmoji: value.selectedEmoji,
    selectedEmotion: value.selectedEmotion,
  };
};

export type HomeTabAtomType = {
  screenStack: string[];
};

export type HomeHeaderAtom = {
  selectedEmoji?: Emotion;
  selectedEmotion?: {korName: string; engName: string};
  progress?: number;
};

export type HomeTabScreenType = keyof HomeStackParamList;
