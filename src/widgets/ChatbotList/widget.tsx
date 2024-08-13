import React from 'react';
import {ScrollView} from 'react-native';
import {MasonryFlashList} from '@shopify/flash-list';

import Chatbot from '@entities/Chatbot/entity';

import {ChatbotListProps} from './types';

const ChatbotList = (props: ChatbotListProps) => {
  const {chatbotList} = props;

  return (
    <ScrollView>
      <MasonryFlashList
        data={chatbotList}
        numColumns={2}
        estimatedItemSize={76}
        renderItem={({item}) => (
          <Chatbot
            name={item.name}
            description={item.description}
            profile={item.profile}
            type={item.type}
          />
        )}
      />
    </ScrollView>
  );
};

export default ChatbotList;
