import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type WrapperProps = PropsWithChildren;

const Wrapper = (props: WrapperProps) => {
  const {children} = props;

  return <SafeAreaView style={{...styles.wrapper}}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({wrapper: {flex: 1}});

export default Wrapper;
