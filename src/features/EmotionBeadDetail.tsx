import React from 'react';
import {View} from 'react-native';

import {EmotionBead} from '@shared/api/emotion-bead/list';
import CustomText from '@shared/components/CustomText';
import {getEmotionStrength} from '@shared/utils/chat';

type EmotionBeadDetailProps = Pick<EmotionBead, 'emotion'>;

const EmotionBeadDetail = (props: EmotionBeadDetailProps) => {
  const {emotion} = props;

  return (
    <>
      <CustomText fontSize="lg">대화 요약</CustomText>
      <View>
        <CustomText fontSize="md">{emotion.summary}</CustomText>
        <CustomText fontSize="md">감정: {emotion.emotion}</CustomText>
        <CustomText fontSize="md">
          강도: {getEmotionStrength(emotion.strength)}
        </CustomText>
        <CustomText fontSize="md">
          키워드: {emotion.keyword.join(',')}
        </CustomText>
      </View>
      <View>
        <CustomText>결합 감정:</CustomText>
        {emotion.combined_emotions.map(value => {
          return (
            <CustomText
              key={
                value.combined_emotion
              }>{`${value.emotion1} + ${value.emotion2} = ${value.combined_emotion}\n강도: ${getEmotionStrength(value.strength)}`}</CustomText>
          );
        })}
      </View>
    </>
  );
};

export default EmotionBeadDetail;
