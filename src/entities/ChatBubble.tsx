import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MessageDTO} from '@shared/api/chat';

export type ChatBubbleProps = MessageDTO;

const ChatBubble = (props: ChatBubbleProps) => {
  const {content, timestamp, role} = props;

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
        {new Date(timestamp)?.toDateString()}
      </Text>
      <Text
        style={[styles.chatText, role === 'assistant' && styles.colorWhite]}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Chat Area
  chatBubble: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  astBubble: {
    backgroundColor: '#EF458E',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  chatDateTime: {
    fontSize: 10,
    marginBottom: 10,
    color: 'rgba(0,0,0,0.5)',
  },
  chatText: {
    color: 'rgba(0,0,0,0.5)',
  },
  colorWhite: {
    color: 'white',
  },
});

export default ChatBubble;
