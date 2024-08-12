import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useFocusEffect} from '@react-navigation/native';

import {RootStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';

import styles from './styles';

const Page = (props: RootStackScreenProps<'Loading'>) => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useFocusEffect(() => {
    setTimeout(() => {
      navigation.replace('Tab', {
        screen: 'HomeNavigator',
      });
    }, 2000);
  });

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.container}}>
      <CustomText fontSize="lg" fontWeight="bold" color="#ffffff">
        KPIHW
      </CustomText>
    </SafeAreaView>
  );
};

export default Page;
