import React, {useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatArea from '@widgets/ChatArea';
import ChatSummaryModal from '@widgets/ChatSummaryModal';
import TabHeader from '@features/TabHeader';
import {useBaseModalControl} from '@entities/BaseModal';
import ConfirmModal from '@entities/ConfirmModal';
import LoadingModal from '@entities/LoadingModal';
import useApiChat, {MessageDTO} from '@shared/api/chat';
import useApiChatSummary, {ChatSummaryDTO} from '@shared/api/chat/summary';
import Wrapper from '@shared/components/Wrapper';

import {HomeStackScreenProps} from './types';

const Chat = (props: HomeStackScreenProps<'Chat'>) => {
  const {route} = props;
  const [message, setMessage] = useState('');
  const apiChat = useApiChat();
  const apiChatSummary = useApiChatSummary();
  const [chatMessages, setChatMessages] = useState<MessageDTO[]>([]);
  const [chatSummary, setChatSummary] = useState<ChatSummaryDTO>();
  const {modalRef} = useBaseModalControl();
  const {modalRef: summaryModalRef} = useBaseModalControl();

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

    const data = await apiChat.mutateAsync({
      chatId: route.params?.id,
      userMessage: message,
    });

    setChatMessages(data.data.data);
  };

  const onPressClose = () => {
    modalRef.current?.show();
  };

  const onConfirmSaveModal = async () => {
    try {
      const response = await apiChatSummary.mutateAsync({
        chatId: route.params?.id,
      });

      setChatSummary(response.data.data);
      summaryModalRef.current?.show();
    } catch (error) {
      console.error('[ERROR] 요약 저장 에러', error);
    }
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
          disabled={apiChat.isPending}
          style={styles.sendIcon}
          onPress={() => submitMessage()}>
          <MaterialCommunityIcons
            name="send"
            color={apiChat.isPending ? '#bbbbbb' : '#EF458E'}
            size={20}
          />
        </Pressable>
        <Button mode="contained" onPress={onPressClose}>
          대화 마치기
        </Button>
      </View>
      <ConfirmModal
        modalRef={modalRef}
        title="대화 마치기"
        description="대화를 마치면 해당 대화를 저장합니다. 계속하시겠어요?"
        onConfirm={onConfirmSaveModal}
      />
      <ChatSummaryModal
        modalRef={summaryModalRef}
        chatSummary={chatSummary}
        chatId={route.params.id}
      />
      <LoadingModal isLoading={apiChatSummary.isPending} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  // Chat Input
  chatInputWrapper: {
    padding: 20,
    gap: 16,
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
