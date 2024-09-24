import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import HomeHeader from '@entities/HomeHeader';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper';

const RecordFeeling = (props: HomeStackScreenProps<'RecordFeeling'>) => {
  const {navigation} = props;
  const {setProgress} = useHomeHeaderAtom();

  useFocusEffect(
    useCallback(() => {
      setProgress(undefined);
    }, [setProgress]),
  );

  return (
    <Wrapper>
      <HomeHeader navigation={navigation} />
      <View style={styles.textContainer}>
        <CustomText fontSize="lg" textAlign="center">
          기록 방법을 선택해주세요
        </CustomText>
        <CustomText fontSize="md" textAlign="center">
          챗봇과 대화하면 더욱 최적화된 솔루션을 받을 수 있어요
        </CustomText>
        <View style={styles.buttonContainer}>
          <SimpleButton
            onPress={() => navigation.navigate('SelectChatbot')}
            title="챗봇과 대화 기록"
          />
          <SimpleButton
            onPress={() => navigation.navigate('RecordFeelingEmoji')}
            title="간략한 키워드 기록"
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    gap: 12,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    gap: 40,
  },
});

export default RecordFeeling;
