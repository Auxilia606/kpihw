import React from 'react';
import {Image, Pressable, View} from 'react-native';

import ArrowLeft from '@shared/assets/image/arrow-left.png';
import ArrowRight from '@shared/assets/image/arrow-right.png';

import styles from './styles';
import {HomeHeaderIconBaseProps} from './types';

const HomeHeader = (props: HomeHeaderIconBaseProps) => {
  const {navigation} = props;

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image style={styles.icon} resizeMode="contain" source={ArrowLeft} />
      </Pressable>
      <Pressable>
        <Image style={styles.icon} resizeMode="contain" source={ArrowRight} />
      </Pressable>
    </View>
  );
};

export default HomeHeader;
