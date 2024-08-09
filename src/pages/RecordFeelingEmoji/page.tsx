import React from 'react';
import {View} from 'react-native';

import {HomeStackScreenProps} from '@pages/types';
import HomeHeader from '@entities/HomeHeader';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const RecordFeelingEmoji = (
  props: HomeStackScreenProps<'RecordFeelingEmoji'>,
) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText>지금 느끼는 감정을 선택해 주세요</CustomText>
        <View style={styles.buttonContainer}>
          <SimpleButton
            onPress={() => navigation.navigate('RecordFeelingEmoji')}
            title="선택하기"
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default RecordFeelingEmoji;
