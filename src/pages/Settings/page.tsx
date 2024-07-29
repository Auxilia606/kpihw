/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {TabScreenProps} from '@pages/types';

import styles from './styles';

const Page = (props: TabScreenProps<'Settings'>) => {
  const {route} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>
        <Text style={styles.highlight}>Setting</Text> Page!! Params:{' '}
        {route.params.text}
      </Text>
    </SafeAreaView>
  );
};

export default Page;
