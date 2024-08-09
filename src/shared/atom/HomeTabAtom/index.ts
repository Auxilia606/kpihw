import {useCallback} from 'react';

import {HomeTabAtomType} from './types';

import {atom, useAtomValue} from 'jotai';

const homeTabAtom = atom<HomeTabAtomType>({screenStack: []});

export const useHomeTabAtom = () => {
  const value = useAtomValue(homeTabAtom);

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

  return {push, pop, reset, check};
};
