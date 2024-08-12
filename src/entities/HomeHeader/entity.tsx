import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler, Image, Pressable, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import ArrowLeft from '@shared/assets/image/arrow-left.png';
import ArrowRight from '@shared/assets/image/arrow-right.png';
import {useHomeTabAtom} from '@shared/atom/HomeTabAtom';

import styles from './styles';
import {HomeHeaderIconBaseProps} from './types';

const HomeHeader = (props: HomeHeaderIconBaseProps) => {
  const {navigation} = props;
  const {pop, push, check} = useHomeTabAtom();
  const [hasStack, setHasStack] = useState(check());

  const onPressBack = useCallback(() => {
    const {index, routes} = navigation.getState();
    const currentRoute = routes[index];

    push(currentRoute.name);
    navigation.goBack();

    return true;
  }, [navigation, push]);

  const onPressForward = useCallback(() => {
    const screen = pop();

    screen && navigation.navigate(screen);
  }, [navigation, pop]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onPressBack,
    );

    return () => backHandler.remove();
  }, [onPressBack]);

  useFocusEffect(() => {
    setTimeout(() => {
      setHasStack(check());
    }, 100);
  });

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.button} onPress={onPressBack}>
        <Image style={styles.icon} resizeMode="contain" source={ArrowLeft} />
      </Pressable>
      <Pressable
        style={[styles.button, !hasStack && styles.hide]}
        onPress={onPressForward}>
        <Image style={styles.icon} resizeMode="contain" source={ArrowRight} />
      </Pressable>
    </View>
  );
};

export default HomeHeader;
