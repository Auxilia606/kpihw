import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RootStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

const Login = (props: RootStackScreenProps<'Login'>) => {
  const {navigation} = props;

  console.log(navigation);

  return (
    <Wrapper>
      <View style={styles.container}>
        <CustomText fontSize="xl" textAlign="center">
          Neuro Mingle
        </CustomText>
        <View style={styles.textContainer}>
          <CustomText fontSize="lg">아이디(이메일)</CustomText>
          <CustomText fontSize="lg">비밀번호</CustomText>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, gap: 40},
  empty: {flex: 1},
  textContainer: {
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
});

export default Login;
