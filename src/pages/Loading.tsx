import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {RootStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';

const Loading = (props: RootStackScreenProps<'Loading'>) => {
  const {navigation} = props;

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.replace('Login');
        // navigation.replace('Tab', {
        //   screen: 'HomeNavigator',
        // });
      }, 2000);
    }, [navigation]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomText fontSize="lg" fontWeight="bold" textAlign="center">
        {'UNDERSTAND YOURSELF,\nSHAPE YOUR WORLD'}
      </CustomText>
      <CustomText fontSize="xl" fontWeight="bold">
        Neuro Mingle
      </CustomText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  text: {
    fontSize: 40,
  },
});

export default Loading;
