import React from 'react';
import {View} from 'react-native';

import {HomeStackScreenProps} from '@pages/types';
import HomeHeader from '@entities/HomeHeader';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const SelectChatbot = (props: HomeStackScreenProps<'SelectChatbot'>) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText fontWeight="bold" fontSize="lg" textAlign="center">
          오늘은 누구와 대화해볼까요?
        </CustomText>
        <CustomText fontSize="md" textAlign="center">
          성격이 모두 다른 친구들! 대화 스타일도 다르답니다.
        </CustomText>
        <View style={styles.buttonContainer}>
          <SimpleButton
            onPress={() => navigation.navigate('SelectChatbot')}
            title="선택하기"
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default SelectChatbot;
