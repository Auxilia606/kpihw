/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Config from 'react-native-config';

import {TabScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';

const Page = (props: TabScreenProps<'Settings'>) => {
  const {route} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CustomText>
        SettingPage!! Params: {route.params?.text}
        {Config.ENV}
      </CustomText>
    </SafeAreaView>
  );
};

export default Page;
