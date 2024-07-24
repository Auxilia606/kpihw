import React, {useEffect} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from './styles';
import {RootStackScreenProps} from '@pages/types';

const Page = (props: RootStackScreenProps<'Main'>) => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tab', {
        screen: 'Settings',
        params: {text: 'Home Changed!'},
      });
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.container}}>
      <Text style={styles.text}>KPIHW</Text>
    </SafeAreaView>
  );
};

export default Page;
