import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import EmojiList from '@widgets/EmojiList';
import HomeHeader from '@entities/HomeHeader';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const RecordFeelingEmoji = (
  props: HomeStackScreenProps<'RecordFeelingEmoji'>,
) => {
  const {navigation} = props;
  const {setProgress, selectedEmoji} = useHomeHeaderAtom();

  useFocusEffect(
    useCallback(() => {
      setProgress(0.33);
    }, [setProgress]),
  );

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText fontSize="lg" textAlign="center">
          지금 느끼는 감정을 선택해 주세요
        </CustomText>
        <View style={styles.emojiList}>
          <EmojiList />
        </View>
        <View style={styles.buttonContainer}>
          <SimpleButton
            disabled={!selectedEmoji}
            onPress={() => navigation.navigate('RecordFeelingWord')}
            title="선택하기"
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default RecordFeelingEmoji;
