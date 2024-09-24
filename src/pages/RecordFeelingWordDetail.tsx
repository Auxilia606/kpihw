import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import HomeHeader from '@entities/HomeHeader';
import {useGetSimiliarWordQuery} from '@shared/api/getSimiliarWord/query';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SelectableButton from '@shared/components/SelectableButton';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper';

const RecordFeelingWordDetail = (
  props: HomeStackScreenProps<'RecordFeelingWordDetail'>,
) => {
  const {navigation} = props;
  const {setProgress, setEmotion, selectedEmotion, selectedEmoji} =
    useHomeHeaderAtom();
  const {data: rawData} = useGetSimiliarWordQuery({word: selectedEmoji});
  const [data, setData] = useState(
    rawData?.map(value => ({...value, isSelected: false})) || [],
  );

  const onPressEmotionButton = (emotion: {
    engName: string;
    korName: string;
  }) => {
    setEmotion(emotion);
  };

  useEffect(() => {
    if (!rawData) {
      return;
    }

    setData(rawData.map(value => ({...value, isSelected: false})));
  }, [rawData]);

  useFocusEffect(
    useCallback(() => {
      setProgress(1);
    }, [setProgress]),
  );

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText fontSize="lg">
          {'지금 이 순간의\n감정을 담은 단어는 바로 이것!'}
        </CustomText>
        <View style={styles.emotionWord}>
          <CustomText fontSize="lg">{selectedEmotion?.korName}</CustomText>
          <CustomText fontSize="lg">{selectedEmotion?.engName}</CustomText>
        </View>
        <View style={styles.emotionList}>
          <FlatList
            contentContainerStyle={styles.listContainer}
            columnWrapperStyle={styles.listColumnWrapper}
            numColumns={2}
            data={data}
            keyExtractor={item => item.engName}
            renderItem={({item: emotion}) => (
              <SelectableButton
                key={emotion.engName}
                title={`${emotion.korName}\n${emotion.engName}`}
                isSelected={emotion.isSelected}
                style={styles.emotionItem}
                selectedStyle={styles.emotionItemSelected}
                onPress={() => onPressEmotionButton(emotion)}
                ellipsizeMode="tail"
                numberOfLines={2}
              />
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SimpleButton
            onPress={() => navigation.navigate('MakeEmotionBead')}
            title="선택 완료"
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
    width: 160,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 0,
  },
  emotionItemSelected: {backgroundColor: '#FFB21D'},
  buttonContainer: {
    marginTop: 32,
    gap: 40,
  },
  emotionWord: {
    marginTop: 16,
    backgroundColor: '#FFB21D',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: 240,
  },
  listContainer: {gap: 4, alignItems: 'center'},
  listColumnWrapper: {gap: 4},
});

export default RecordFeelingWordDetail;
