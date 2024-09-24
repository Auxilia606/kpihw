import React from 'react';
import {View} from 'react-native';

import {RootStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

import styles from './styles';

const Page = (props: RootStackScreenProps<'Login'>) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <View style={styles.textContainer}>
        <CustomText>로그인</CustomText>
      </View>
    </Wrapper>
  );
};

export default Page;
