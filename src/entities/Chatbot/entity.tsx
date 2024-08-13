import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import Lock from '@shared/assets/image/bx-lock.png';

import styles from './styles';
import {ChatbotProps} from './types';

const Chatbot = (props: ChatbotProps) => {
  const {name, description, profile, type} = props;

  return (
    <Pressable
      // onPress={() => navigation.navigate('Chat')}
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
