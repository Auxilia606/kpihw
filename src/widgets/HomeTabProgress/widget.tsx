import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Progress from '@entities/Progress/entity';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';

import styles from './styles';

const HomeTabProgress = () => {
  const {top} = useSafeAreaInsets();
  const {progress} = useHomeHeaderAtom();

  if (progress === undefined) {
    return null;
  }

  return (
    <View style={[styles.container, {top: top + 48}]}>
      <Progress progress={progress} width="80%" borderRadius={10} />
    </View>
  );
};

export default HomeTabProgress;
