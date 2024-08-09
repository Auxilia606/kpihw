import React, {useEffect} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {RootStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';

import styles from './styles';

const Page = (props: RootStackScreenProps<'Loading'>) => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tab', {
        screen: 'HomeNavigator',
      });
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.container}}>
      <CustomText fontSize="lg" fontWeight="bold">
        KPIHW
      </CustomText>
    </SafeAreaView>
  );
};

export default Page;
