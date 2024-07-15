import React, {useEffect} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Page = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tab');
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.container}}>
      <Text style={styles.text}>KPIHW</Text>
    </SafeAreaView>
  );
};

export default Page;
