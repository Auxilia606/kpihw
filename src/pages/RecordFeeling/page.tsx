import React from 'react';
import {View} from 'react-native';

import {HomeStackScreenProps} from '@pages/types';
import HomeHeader from '@entities/HomeHeader';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const RecordFeeling = (props: HomeStackScreenProps<'RecordFeeling'>) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText fontSize="lg" textAlign="center">
          기록 방법을 선택해주세요
        </CustomText>
        <CustomText fontSize="md" textAlign="center">
          챗봇과 대화하면 더욱 최적화된 솔루션을 받을 수 있어요
        </CustomText>
        <View style={styles.buttonContainer}>
          <SimpleButton
            onPress={() => navigation.navigate('SelectChatbot')}
            title="챗봇과 대화 기록"
          />
          <SimpleButton
            onPress={() => navigation.navigate('RecordFeelingEmoji')}
            title="간략한 키워드 기록"
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default RecordFeeling;
