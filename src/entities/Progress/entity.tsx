import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

import styles from './styles';
import {ProgressProps} from './types';

const Progress = (props: ProgressProps) => {
  const {
    progress = 0,
    borderColor,
    borderRadius,
    borderWidth = 0,
    color = '#3D67FF',
    height = 8,
    unfilledColor = '#D9D9D9',
    width = '100%',
  } = props;

  // const percentage: DimensionValue = `${Math.max(Math.min(progress, 1), 0) * 100}%`;

  const prevProgressRef = useRef(0);
  const progressAnim = new Animated.Value(prevProgressRef.current);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const animation = Animated.timing(progressAnim, {
    toValue: progress,
    duration: 500,
    useNativeDriver: false,
  });

  useEffect(() => {
    animation.start();
    prevProgressRef.current = progress;

    return () => animation.reset();
  }, [animation, progress]);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor,
          borderRadius,
          borderWidth,
          backgroundColor: unfilledColor,
          width,
          height,
        },
      ]}>
      <Animated.View
        style={[
          styles.bar,
          {
            width: progressWidth,
            height,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
};

export default Progress;
