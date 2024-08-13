import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Progress from '@entities/Progress/entity';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';

import styles from './styles';

const HomeTabProgress = () => {
  const {top} = useSafeAreaInsets();
  const {progress} = useHomeHeaderAtom();

  if (progress === undefined) {
    return null;
  }

  const progressLabel =
    progress === 0.33
      ? '1. 감정분류'
      : progress === 0.66
        ? '2. 감정 세분화'
        : progress === 1
          ? '3. 다 왔어요! 지금 감정에 꼭 맞는 솔루션을 추천해 줄게요'
          : '';

  return (
    <View style={[styles.container, {top: top + 48}]}>
      <Progress progress={progress} borderRadius={10} />
      <CustomText style={styles.label} textAlign="left">
        {progressLabel}
      </CustomText>
    </View>
  );
};

export default HomeTabProgress;
