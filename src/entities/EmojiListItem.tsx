import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageURISource,
  Pressable,
  StyleSheet,
} from 'react-native';

import CustomText from '@shared/components/CustomText';

export enum Emotion {
  TRUST = '신뢰',
  FEAR = '두려움',
  SURPRISE = '놀라움',
  SADNESS = '슬품',
  DISGUST = '혐오',
  ANGER = '분노',
  ANTICIPATION = '기대',
  JOY = '기쁨',
}

export const emotionList = [
  {
    korName: Emotion.TRUST,
    engName: 'Trust',
    sub: [
      {korName: '수용', engName: 'Acceptance', degree: 1},
      {korName: '신뢰', engName: 'Trust', degree: 2},
      {korName: '감탄/존경', engName: 'Admiration', degree: 3},
    ],
  },
  {
    korName: Emotion.FEAR,
    engName: 'Fear',
    sub: [
      {korName: '우려/불안', engName: 'Apprehension', degree: 1},
      {korName: '두려움', engName: 'Fear', degree: 2},
      {korName: '공포', engName: 'Terror', degree: 3},
    ],
  },
  {
    korName: Emotion.SURPRISE,
    engName: 'Surprise',
    sub: [
      {korName: '부주의/방심', engName: 'Distraction', degree: 1},
      {korName: '놀람', engName: 'Surprise', degree: 2},
      {korName: '놀라움', engName: 'Amazement', degree: 3},
    ],
  },
  {
    korName: Emotion.SADNESS,
    engName: 'Sadness',
    sub: [
      {korName: '수심', engName: 'Pensiveness', degree: 1},
      {korName: '슬픔', engName: 'Sadness', degree: 2},
      {korName: '비통', engName: 'Grief', degree: 3},
    ],
  },
  {
    korName: Emotion.DISGUST,
    engName: 'Disgust',
    sub: [
      {korName: '지루함/따분함', engName: 'Boredom', degree: 1},
      {korName: '혐오/역겨움', engName: 'Disgust', degree: 2},
      {korName: '혐오/증오', engName: 'Loathing', degree: 3},
    ],
  },
  {
    korName: Emotion.ANGER,
    engName: 'Anger',
    sub: [
      {korName: '짜증/약이 오름', engName: 'Annoyance', degree: 1},
      {korName: '분노/노여움', engName: 'Anger', degree: 2},
      {korName: '분노/격노', engName: 'Rage', degree: 3},
    ],
  },
  {
    korName: Emotion.ANTICIPATION,
    engName: 'Anticipation',
    sub: [
      {korName: '관심/호기심', engName: 'Interest', degree: 1},
      {korName: '기대/고대', engName: 'Anticipation', degree: 2},
      {korName: '경계/주의', engName: 'Vigilance', degree: 3},
    ],
  },
  {
    korName: Emotion.JOY,
    engName: 'Joy',
    sub: [
      {korName: '평온', engName: 'Serenity', degree: 1},
      {korName: '기쁨', engName: 'Joy', degree: 2},
      {korName: '황홀', engName: 'Ecstasy', degree: 3},
    ],
  },
];

export type EmojiItemType = {
  key: string;
  title: Emotion;
  source: ImageURISource;
};

type EmojiListItemProps = {
  item: EmojiItemType & {isSelected: boolean};
  index: number;
  onPressItem: (itemIndex: number) => void;
};

const EmojiListItem = (props: EmojiListItemProps) => {
  const {index, item, onPressItem} = props;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const config: Animated.TimingAnimationConfig = {
      toValue: item.isSelected ? 1.5 : 1,
      easing: Easing.linear,
      duration: 200,
      useNativeDriver: true,
    };

    Animated.timing(scaleAnim, config).start();
  }, [item.isSelected, item.title, scaleAnim]);

  return (
    <Pressable
      onPress={() => {
        onPressItem(index);
      }}>
      <Animated.View
        style={[
          styles.emojiContainer,
          {
            transform: [
              {
                scaleX: scaleAnim,
              },
              {
                scaleY: scaleAnim,
              },
            ],
          },
        ]}>
        <Image
          style={styles.emojiIcon}
          resizeMode="contain"
          source={item.source}
        />
        <CustomText fontSize="lg">{item.title}</CustomText>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  emojiContainer: {
    width: 80,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiIcon: {width: 48, height: 48},
});

export default EmojiListItem;
