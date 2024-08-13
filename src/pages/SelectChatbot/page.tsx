import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';

import {HomeStackScreenProps} from '@pages/types';
import ChatbotList from '@widgets/ChatbotList/widget';
import {ChatbotProps} from '@entities/Chatbot/types';
import HomeHeader from '@entities/HomeHeader';
import ChatbotSunfish from '@shared/assets/image/ChatbotSunfish.png';
import ChatbotTeddy from '@shared/assets/image/ChatbotTeddy.png';
import ChatbotTRuler from '@shared/assets/image/ChatbotTRuler.png';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const SelectChatbot = (props: HomeStackScreenProps<'SelectChatbot'>) => {
  const {navigation} = props;

  const [chatbotList, setChatbotList] = useState<ChatbotProps[]>([]);

  // TODO:
  useEffect(() => {
    setChatbotList([
      {
        name: '푸른 눈 테디베어',
        description: '언제나 너의 말을 들어줄게',
        profile: ChatbotTeddy,
      },
      {
        name: '살아남는 개복치',
        description: '초초초 예민 보스',
        profile: ChatbotSunfish,
      },
      {
        name: '너 티니? 나 티 자',
        description: '객관적인 팩트를 좋아해. 너의 생각에 진실은 몇 %일까?',
        profile: ChatbotTRuler,
      },
      {
        type: 'unlock',
        name: '새 친구 대기 중',
        description: '대화 10회 이상 (3/10)',
      },
    ]);
  }, []);

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View>
        <CustomText fontWeight="bold" fontSize="lg" textAlign="center">
          오늘은 누구와 대화해볼까요?
        </CustomText>
        <CustomText fontSize="md" textAlign="center">
          성격이 모두 다른 친구들! 대화 스타일도 다르답니다.
        </CustomText>
        <ScrollView style={styles.chatbotContainer}>
          <ChatbotList chatbotList={chatbotList} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default SelectChatbot;
