import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {ChatBubbleProps} from './types';

const ChatBubble = (props: ChatBubbleProps) => {
  const {content, dateTime, role} = props;

  return (
    <View
      style={[
        styles.chatBubble,
        role === 'user' ? styles.userBubble : styles.astBubble,
      ]}>
      <Text
        style={[
          styles.chatDateTime,
          role === 'assistant' && styles.colorWhite,
        ]}>
        {dateTime.toDateString()}
      </Text>
      <Text style={role === 'assistant' && styles.colorWhite}>{content}</Text>
    </View>
  );
};

export default ChatBubble;
