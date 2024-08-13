import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '@pages/types';
import Lock from '@shared/assets/image/bx-lock.png';

import styles from './styles';
import {ChatbotProps} from './types';

const Chatbot = (props: ChatbotProps) => {
  const {name, description, profile, type} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Tab', {screen: 'Chat'})}
      style={[styles.chatbot, type === 'unlock' && styles.chatbotUnlock]}>
      <View
        style={[
          styles.chatbotMainInfo,
          type === 'unlock' && {justifyContent: 'center'},
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

export default Chatbot;
