import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {HomeStackParamList} from '@pages/types';
import useApiChatCreate from '@shared/api/chat/create';
import {ChatBotDTO} from '@shared/api/chatbot/list';
import Lock from '@shared/assets/image/bx-lock.png';

export type ChatbotProps = ChatBotDTO & {
  profile?: ImageSourcePropType;
  // height?: number;
  type?: undefined | 'unlock';
};

const Chatbot = (props: ChatbotProps) => {
  const {_id, name, description, profile, type} = props;
  const navigation =
    useNavigation<
      NativeStackNavigationProp<HomeStackParamList, 'SelectChatbot'>
    >();
  const {mutateAsync} = useApiChatCreate();

  const onPressChatBot = async () => {
    try {
      const response = await mutateAsync({botId: _id});

      navigation.navigate('Chat', {id: response.data.data._id});
    } catch (error) {}
  };

  return (
    <Pressable
      onPress={onPressChatBot}
      style={[styles.chatbot, type === 'unlock' && styles.chatbotUnlock]}>
      <View
        style={[
          styles.chatbotMainInfo,
          type === 'unlock' && styles.chatbotCenter,
        ]}>
        {profile && (
          <View style={styles.chatbotProfile}>
            <Image source={profile} />
          </View>
        )}
        <Text style={styles.chatbotName}>{name}</Text>
      </View>
      {type === 'unlock' && <Image source={Lock} />}
      <Text style={styles.chatbotDescription}>{description}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatbot: {
    // flexShrink: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  chatbotMainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatbotCenter: {justifyContent: 'center'},
  chatbotProfile: {
    marginRight: 8,
  },
  chatbotName: {
    color: '#000000',
    flexShrink: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  chatbotDescription: {
    color: '#222222',
    marginTop: 12,
  },
  adContainer: {
    height: 98,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 10,
  },
  chatbotUnlockContainer: {
    flexDirection: 'row',
  },
  chatbotUnlock: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default Chatbot;
