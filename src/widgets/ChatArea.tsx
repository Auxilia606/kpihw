import React, {useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';

import ChatBubble from '@entities/ChatBubble';
import {ChatBubbleProps} from '@entities/ChatBubble';

export type ChatAreaProps = {
  chatMessages: ChatBubbleProps[];
};

const ChatArea = (props: ChatAreaProps) => {
  const {chatMessages} = props;
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollToEnd();
  }, [chatMessages.length]);

  return (
    <ScrollView ref={scrollRef}>
      {chatMessages.map((msg, idx) => {
        return <ChatBubble {...msg} key={idx} />;
      })}
    </ScrollView>
  );
};

export default ChatArea;
