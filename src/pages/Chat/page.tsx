import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Page = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello, How can I help you today?',
      dateTime: new Date(),
    },
    {
      role: 'user',
      content: "I'm having a bad day",
      dateTime: new Date(),
    },
    {
      role: 'assistant',
      content: "I'm sorry to hear that. Is there anything I can do to help?",
      dateTime: new Date(),
    },
    {
      role: 'assistant',
      content: 'Or is there anything you would like to talk about?',
      dateTime: new Date(),
    },
    {
      role: 'user',
      content:
        "I don't want to be in this situation, but everyone seems to be expecting so much from me...",
      dateTime: new Date(),
    },
  ]);

  const submitMessage = () => {
    setMessage('');
    setChatMessages(prev => {
      const newMessage = [...prev];
      newMessage.push({
        role: 'user',
        content: message,
        dateTime: new Date(),
      });
      return newMessage;
    });
  };

  const flexStretch = {flex: 1};
  const colorWhite = {color: '#fff'};

  return (
    <SafeAreaView style={flexStretch}>
      <View style={flexStretch}>
        {/* Chat Header */}
        <View style={styles.chatHeader}>
          <Text style={styles.chatHeaderTitle}>Chat</Text>
        </View>

        {/* Chat Area */}
        <ScrollView>
          {chatMessages.map((msg, idx) => {
            return (
              <View
                style={[
                  styles.chatBubble,
                  msg.role === 'user' ? styles.userBubble : styles.astBubble,
                ]}
                key={idx}>
                <Text
                  style={[
                    styles.chatDateTime,
                    msg.role === 'assistant' && colorWhite,
                  ]}>
                  {msg.dateTime.toDateString()}
                </Text>
                <Text style={msg.role === 'assistant' && colorWhite}>
                  {msg.content}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* Chat Input */}
      <View style={styles.chatInputWrapper}>
        <TextInput
          placeholder="Type"
          multiline
          value={message}
          onChangeText={setMessage}
          blurOnSubmit
          onSubmitEditing={() => submitMessage()}
          style={styles.chatInput}
        />
        <Pressable style={styles.sendIcon} onPress={() => submitMessage()}>
          <MaterialCommunityIcons name="send" color={'#EF458E'} size={20} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Page;
