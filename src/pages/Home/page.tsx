import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  EventListenerCallback,
  EventMapCore,
  ParamListBase,
  StackNavigationState,
} from '@react-navigation/native';
import {NativeStackNavigationEventMap} from '@react-navigation/native-stack';

import {HomeStackScreenProps} from '@pages/types';
import {useHomeTabAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const Page = (props: HomeStackScreenProps<'Home'>) => {
  const {navigation} = props;
  const {reset} = useHomeTabAtom();

  useFocusEffect(() => {
    reset();
  });

  useEffect(() => {
    let prevIndex = -1;
    const action: EventListenerCallback<
      NativeStackNavigationEventMap &
        EventMapCore<StackNavigationState<ParamListBase>>,
      'state'
    > = e => {
      const {
        data: {
          state: {index},
        },
      } = e;

      if (index > prevIndex) {
        reset();
      }

      prevIndex = index;
    };

    navigation.addListener('state', action);

    return () => navigation.removeListener('state', action);
  }, [navigation, reset]);

  return (
    <Wrapper>
      <View style={styles.textContainer}>
        <CustomText fontSize="lg" textAlign="center">
          오늘 감정을 기록해주세요
        </CustomText>
        <CustomText fontSize="lg" textAlign="center">
          {'감정을 기록하면\n이 순간에 꼭 맞는\n콘텐츠를 찾아 드릴게요'}
        </CustomText>
        <SimpleButton
          onPress={() => {
            navigation.navigate('RecordFeeling');
          }}
          title="감정 기록하기"
        />
      </View>
    </Wrapper>
  );
};

export default Page;
