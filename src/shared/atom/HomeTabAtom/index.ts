import {useCallback} from 'react';
import {atom, useAtom} from 'jotai';

import {Emotion} from '@entities/EmojiListItem';

import {HomeTabAtomType} from './types';

const homeTabAtom = atom<HomeTabAtomType>({
  screenStack: [],
  selectedEmoji: undefined,
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

  const setEmotion = useCallback(
    (emotion: Emotion) => {
      value.selectedEmoji = emotion;
    },
    [value],
  );

  return {push, pop, reset, check, setEmotion};
};
