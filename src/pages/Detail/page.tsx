import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from './styles';

const Page = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>
        <Text style={styles.highlight}>Detail</Text> Page!!
      </Text>
    </SafeAreaView>
  );
};

export default Page;
