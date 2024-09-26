import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {RootStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';
import useEncryptedStorage from '@shared/hooks/useEncryptedStorage';

const Loading = (props: RootStackScreenProps<'Loading'>) => {
  const {navigation} = props;

  const {getEData} = useEncryptedStorage();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        (async () => {
          const token = await getEData('token');

          console.log(token);
          navigation.replace('Login');
          // if (!token) {
          //   navigation.replace('Login');
          // } else {
          //   navigation.replace('Tab', {
          //     screen: 'HomeNavigator',
          //   });
          // }
        })();
      }, 2000);
    }, [getEData, navigation]),
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
