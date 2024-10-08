import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import {emotionList} from '@entities/EmojiListItem';
import HomeHeader from '@entities/HomeHeader';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SelectableButton from '@shared/components/SelectableButton';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper';

const RecordFeelingWord = (
  props: HomeStackScreenProps<'RecordFeelingWord'>,
) => {
  const {navigation} = props;
  const {setProgress, selectedEmoji, setEmotion} = useHomeHeaderAtom();
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
        <CustomText fontSize="lg">
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
            onPress={() => {
              navigation.navigate('RecordFeelingWordDetail');
              setEmotion(subEmotionList.find(value => value.isSelected));
            }}
            title="선택하기"
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  emotionList: {marginTop: 32, gap: 16},
  emotionItem: {
    backgroundColor: '#D9D9D9',
    width: 200,
    borderWidth: 0,
    borderRadius: 0,
  },
  emotionItemSelected: {backgroundColor: '#FFB21D'},
  buttonContainer: {
    marginTop: 32,
    gap: 40,
  },
});

export default RecordFeelingWord;
