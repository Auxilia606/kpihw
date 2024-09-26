import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {HomeStackScreenProps} from '@pages/types';
import ChatbotList from '@widgets/ChatbotList';
import HomeHeader from '@entities/HomeHeader';
import useApiChatbotList from '@shared/api/chatbot/list';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

const SelectChatbot = (props: HomeStackScreenProps<'SelectChatbot'>) => {
  const {navigation} = props;

  const {data} = useApiChatbotList({limit: '100', page: '1'});

  const chatbotList = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.data.data;
  }, [data]);

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

const styles = StyleSheet.create({
  chatbotContainer: {
    marginHorizontal: 16,
  },
});

export default SelectChatbot;
