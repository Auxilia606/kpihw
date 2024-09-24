import React, {PropsWithChildren} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

type WrapperProps = PropsWithChildren;

const Wrapper = (props: WrapperProps) => {
  const {children} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.wrapper}}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({wrapper: {flex: 1}});

export default Wrapper;
