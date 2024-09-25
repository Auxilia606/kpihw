import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EmojiListItem from '@entities/EmojiListItem';
import {EmojiItemType, Emotion} from '@entities/EmojiListItem';
import EmojiAnger from '@shared/assets/image/EmojiAnger.png';
import EmojiAnticipation from '@shared/assets/image/EmojiAnticipation.png';
import EmojiDisgust from '@shared/assets/image/EmojiDisgust.png';
import EmojiFear from '@shared/assets/image/EmojiFear.png';
import EmojiJoy from '@shared/assets/image/EmojiJoy.png';
import EmojiSadness from '@shared/assets/image/EmojiSadness.png';
import EmojiSurprise from '@shared/assets/image/EmojiSurprise.png';
import EmojiTrust from '@shared/assets/image/EmojiTrust.png';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';

export const emojiItemList: EmojiItemType[] = [
  {key: '0', title: Emotion.TRUST, source: EmojiTrust},
  {key: '1', title: Emotion.FEAR, source: EmojiFear},
  {key: '2', title: Emotion.SURPRISE, source: EmojiSurprise},
  {key: '3', title: Emotion.SADNESS, source: EmojiSadness},
  {key: '4', title: Emotion.DISGUST, source: EmojiDisgust},
  {key: '5', title: Emotion.ANGER, source: EmojiAnger},
  {key: '6', title: Emotion.ANTICIPATION, source: EmojiAnticipation},
  {key: '7', title: Emotion.JOY, source: EmojiJoy},
];

const EmojiList = () => {
  const [data, setData] = useState(
    emojiItemList.map(value => ({...value, isSelected: false})),
  );
  const {setEmoji} = useHomeHeaderAtom();

  const onPressItem = useCallback(
    (pressedIndex: number) => {
      setData(prev =>
        prev.map((value, index) => {
          if (pressedIndex === index) {
            setEmoji(!value.isSelected ? value.title : undefined);

            return {...value, isSelected: !value.isSelected};
          } else if (!value.isSelected) {
            return value;
          } else {
            return {...value, isSelected: false};
          }
        }),
      );
    },
    [setEmoji],
  );

  return (
    <FlatList
      data={data}
      numColumns={4}
      contentContainerStyle={styles.listContainer}
      keyExtractor={item => item.key}
      renderItem={({item, index}) => (
        <EmojiListItem
          index={index}
          item={item}
          key={`${item.title}_${index}`}
          onPressItem={onPressItem}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default EmojiList;
