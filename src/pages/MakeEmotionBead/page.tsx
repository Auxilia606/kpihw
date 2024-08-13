import React, {useCallback, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import BaseModal from '@entities/BaseModal/entity';
import TextInputLine from '@entities/TextInputLine';
import Bead from '@shared/assets/image/Bead.png';
import Brain from '@shared/assets/image/Brain.png';
import Dizzy from '@shared/assets/image/Dizzy.png';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper/component';

import styles from './styles';

const MakeEmotionBead = (props: HomeStackScreenProps<'MakeEmotionBead'>) => {
  const {navigation} = props;
  const {setProgress, selectedEmotion} = useHomeHeaderAtom();
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onPressSubmit = () => {
    setModalVisible(true);
  };

  const onPressModal = () => {
    setModalVisible(false);
    navigation.popToTop();
    navigation.navigate('Chat');
  };

  useFocusEffect(
    useCallback(() => {
      setProgress(undefined);
    }, [setProgress]),
  );

  return (
    <Wrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <CustomText fontSize="xl">감정 구슬 생성 완료!</CustomText>
        {/* 아래는 추후 제대로 된 이미지로 교체 예정 */}
        <View style={styles.imageContainer}>
          <Image style={styles.brain} source={Brain} />
          <Image style={styles.dizzy} source={Dizzy} />
        </View>
        <View style={styles.editSection}>
          <CustomText textAlign="center">{new Date().toUTCString()}</CustomText>
          <View style={styles.header}>
            <Image style={styles.bead} source={Bead} />
            <View style={styles.headerText}>
              <CustomText fontSize="xl">{selectedEmotion?.korName}</CustomText>
              <CustomText fontSize="xl">{selectedEmotion?.engName}</CustomText>
            </View>
          </View>
          <View style={[styles.paper]}>
            <TextInputLine text={text} setText={setText} />
          </View>
          <SimpleButton
            disabled={!text.length}
            title="작성 완료"
            style={styles.submitButton}
            onPress={onPressSubmit}
          />
        </View>
      </ScrollView>
      <BaseModal visible={modalVisible} contentStyle={styles.modalContent}>
        <CustomText fontSize="lg" fontWeight="bold">
          감정구슬을 저장했어요
        </CustomText>
        <Image style={styles.modalImage} source={Dizzy} />
        <SimpleButton
          style={styles.submitButton}
          title="확인"
          onPress={onPressModal}
        />
      </BaseModal>
    </Wrapper>
  );
};

export default MakeEmotionBead;
