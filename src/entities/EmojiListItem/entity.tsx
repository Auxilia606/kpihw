import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, Pressable} from 'react-native';

import CustomText from '@shared/components/CustomText';

import styles from './styles';
import {EmojiListItemProps} from './types';

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

export default EmojiListItem;
