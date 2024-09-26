import React, {useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatArea from '@widgets/ChatArea';
import TabHeader from '@features/TabHeader';
import useApiChat, {MessageDTO} from '@shared/api/chat';
import Wrapper from '@shared/components/Wrapper';

import {HomeStackScreenProps} from './types';

const Chat = (props: HomeStackScreenProps<'Chat'>) => {
  const {route} = props;
  const [message, setMessage] = useState('');
  const {mutateAsync, isPending} = useApiChat();
  const [chatMessages, setChatMessages] = useState<MessageDTO[]>([]);

  const submitMessage = async () => {
    setMessage('');
    setChatMessages(prev => {
      return [
        ...prev,
        {
          _id: 'tempusermessage',
          content: message,
          role: 'user',
          timestamp: new Date(),
        },
      ];
    });

    const data = await mutateAsync({
      chatId: route.params?.id,
      userMessage: message,
    });

    setChatMessages(data.data.data);
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <TabHeader title="Chat" />
        <ChatArea chatMessages={chatMessages} />
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
        <Pressable
          disabled={isPending}
          style={styles.sendIcon}
          onPress={() => submitMessage()}>
          <MaterialCommunityIcons
            name="send"
            color={isPending ? '#bbbbbb' : '#EF458E'}
            size={20}
          />
        </Pressable>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  // Chat Input
  chatInputWrapper: {
    padding: 14,
  },
  chatInput: {
    minHeight: 40,
    maxHeight: 80,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: '#EF458E',
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000000',
  },
  sendIcon: {
    position: 'absolute',
    right: 20,
    top: 24,
  },
});

export default Chat;
