import React from 'react';
import {View} from 'react-native';

import {HomeStackScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const Page = (props: HomeStackScreenProps<'Home'>) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <View style={styles.textContainer}>
        <CustomText fontSize="lg" textAlign="center">
          오늘 감정을 기록해주세요
        </CustomText>
        <CustomText fontSize="lg" textAlign="center">
          {'감정을 기록하면\n이 순간에 꼭 맞는\n콘텐츠를 찾아 드릴게요'}
        </CustomText>
        <SimpleButton
          onPress={() => navigation.navigate('RecordFeeling')}
          title="감정 기록하기"
        />
      </View>
    </Wrapper>
  );
};

export default Page;
