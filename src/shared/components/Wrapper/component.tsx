import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {SectionProps} from './types';

const Wrapper = (props: SectionProps) => {
  const {children} = props;

  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

export default Wrapper;
