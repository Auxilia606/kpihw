import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '@pages/types';
import EmotionBeadDetail from '@features/EmotionBeadDetail';
import BaseModal, {BaseModalControl} from '@entities/BaseModal';
import LoadingModal from '@entities/LoadingModal';
import {ChatSummaryDTO} from '@shared/api/chat/summary';
import useApiEmotionBeadCreate from '@shared/api/emotion-bead/create';

type ChatSummaryModalProps = {
  modalRef: React.RefObject<BaseModalControl>;
  chatSummary: ChatSummaryDTO | undefined;
  chatId: string;
};

const ChatSummaryModal = (props: ChatSummaryModalProps) => {
  const {modalRef, chatSummary, chatId} = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Tab'>>();

  const emotionBeadCreate = useApiEmotionBeadCreate();

  const onPressModalConfirm = async () => {
    if (!chatSummary) {
      return;
    }

    try {
      await emotionBeadCreate.mutateAsync({chatId, emotion: chatSummary});

      navigation.navigate('Tab', {
        screen: 'HomeNavigator',
        params: {screen: 'Home'},
      });
      navigation.navigate('Tab', {screen: 'EmotionBeadList'});
    } catch (error) {
      console.error('[ERROR] 감정구슬 생성 에러', error);
    }
    modalRef.current?.hide();
  };

  if (!chatSummary) {
    return null;
  }

  return (
    <BaseModal ref={modalRef} contentContainerStyle={styles.contentContainer}>
      <EmotionBeadDetail emotion={chatSummary} />
      <Button onPress={onPressModalConfirm} textColor="#5050ff">
        감정구슬 저장
      </Button>
      <LoadingModal isLoading={emotionBeadCreate.isPending} />
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 40,
    padding: 16,
    gap: 8,
  },
});

export default ChatSummaryModal;
