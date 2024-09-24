import React from 'react';
import {ScrollView} from 'react-native';

import ChatBubble from '@entities/ChatBubble';
import {ChatBubbleProps} from '@entities/ChatBubble';

export type ChatAreaProps = {
  chatMessages: ChatBubbleProps[];
};

const ChatArea = (props: ChatAreaProps) => {
  const {chatMessages} = props;

  return (
    <ScrollView>
      {chatMessages.map((msg, idx) => {
        return (
          <ChatBubble
            content={msg.content}
            dateTime={msg.dateTime}
            role={msg.role}
            key={idx}
          />
        );
      })}
    </ScrollView>
  );
};

export default ChatArea;
