import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import {emotionList} from '@entities/EmojiListItem';
import HomeHeader from '@entities/HomeHeader';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SelectableButton from '@shared/components/SelectableButton';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const RecordFeelingWord = (
  props: HomeStackScreenProps<'RecordFeelingWord'>,
) => {
  const {navigation} = props;
  const {setProgress, selectedEmoji} = useHomeHeaderAtom();
  const [subEmotionList, setSubEmotionList] = useState(
    (
      emotionList.find(emotion => emotion.korName === selectedEmoji)?.sub || []
    ).map(value => ({...value, isSelected: false})),
  );

  const onPressEmotionButton = (emotionName: string) => {
    setSubEmotionList(prev => {
      return prev.map(value => {
        if (value.korName === emotionName) {
          return {...value, isSelected: !value.isSelected};
        } else if (value.isSelected) {
          return {...value, isSelected: false};
        } else {
          return value;
        }
      });
    });
  };

  useFocusEffect(
    useCallback(() => {
      setProgress(0.66);
    }, [setProgress]),
  );

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText fontSize="lg" textAlign="center">
          {'지금 느끼는 감정과\n가장 가까운 감정 단어는 무엇인가요?'}
        </CustomText>
        <View style={styles.emotionList}>
          {subEmotionList.map(emotion => (
            <SelectableButton
              key={emotion.engName}
              title={emotion.korName}
              isSelected={emotion.isSelected}
              style={styles.emotionItem}
              selectedStyle={styles.emotionItemSelected}
              onPress={() => onPressEmotionButton(emotion.korName)}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <SimpleButton
            disabled={!subEmotionList.some(value => value.isSelected)}
            onPress={() => navigation.navigate('RecordFeelingEmoji')}
            title="선택하기"
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default RecordFeelingWord;
