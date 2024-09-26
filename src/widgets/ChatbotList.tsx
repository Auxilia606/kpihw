import React from 'react';
import {ScrollView} from 'react-native';
import {MasonryFlashList} from '@shopify/flash-list';

import Chatbot, {ChatbotProps} from '@entities/Chatbot';

type ChatbotListProps = {
  chatbotList: ChatbotProps[];
};

const ChatbotList = (props: ChatbotListProps) => {
  const {chatbotList} = props;

  return (
    <ScrollView>
      <MasonryFlashList
        data={chatbotList}
        numColumns={2}
        estimatedItemSize={76}
        renderItem={({item}) => (
          <Chatbot {...item} profile={item.profile} type={item.type} />
        )}
      />
    </ScrollView>
  );
};

export default ChatbotList;
