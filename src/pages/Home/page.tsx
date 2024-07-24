import React from 'react';
import {Button, SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from './styles';
import {TabScreenProps} from '@pages/types';

const Page = (props: TabScreenProps<'Home'>) => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>
        <Text style={styles.highlight}>Home</Text> Page!!
      </Text>
      <Button
        title="go to setting"
        onPress={() => navigation.navigate('Settings', {text: 'test'})}
      />
    </SafeAreaView>
  );
};

export default Page;
