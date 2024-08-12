import {useCallback} from 'react';
import {atom, useAtom} from 'jotai';

import {Emotion} from '@entities/EmojiListItem';

import {HomeHeaderAtom, HomeTabAtomType} from './types';

const homeTabAtom = atom<HomeTabAtomType>({
  screenStack: [],
});

const homeHeaderAtom = atom<HomeHeaderAtom>({
  selectedEmoji: undefined,
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

  const setEmotion = useCallback(
    (emotion: Emotion | undefined) => {
      setValue(prev => ({...prev, selectedEmoji: emotion}));
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
    setEmotion,
    setProgress,
    progress: value.progress,
    selectedEmoji: value.selectedEmoji,
  };
};
