import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type ChatBubbleProps = {
  role: 'assistant' | 'user';
  content: string;
  dateTime: Date;
};

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
  colorWhite: {
    color: 'white',
  },
});

export default ChatBubble;
