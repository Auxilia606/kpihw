import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';

import EmojiListItem from '@entities/EmojiListItem';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';

import {emojiItemList} from './constants';
import styles from './styles';

const EmojiList = () => {
  const [data, setData] = useState(
    emojiItemList.map(value => ({...value, isSelected: false})),
  );
  const {setEmotion} = useHomeHeaderAtom();

  const onPressItem = useCallback(
    (pressedIndex: number) => {
      setData(prev =>
        prev.map((value, index) => {
          if (pressedIndex === index) {
            setEmotion(!value.isSelected ? value.title : undefined);

            return {...value, isSelected: !value.isSelected};
          } else if (!value.isSelected) {
            return value;
          } else {
            return {...value, isSelected: false};
          }
        }),
      );
    },
    [setEmotion],
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

export default EmojiList;
