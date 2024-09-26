import React, {useCallback, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeStackScreenProps} from '@pages/types';
import BaseModal, {useBaseModalControl} from '@entities/BaseModal';
import TextInputLine from '@entities/TextInputLine';
import Bead from '@shared/assets/image/Bead.png';
import Brain from '@shared/assets/image/Brain.png';
import Dizzy from '@shared/assets/image/Dizzy.png';
import {useHomeHeaderAtom} from '@shared/atom/HomeTabAtom';
import CustomText from '@shared/components/CustomText';
import SimpleButton from '@shared/components/SimpleButton';
import Wrapper from '@shared/components/Wrapper';

const MakeEmotionBead = (props: HomeStackScreenProps<'MakeEmotionBead'>) => {
  const {navigation} = props;
  const {setProgress, selectedEmotion} = useHomeHeaderAtom();
  const [text, setText] = useState('');
  const {modalRef} = useBaseModalControl();

  const onPressSubmit = () => {
    modalRef.current?.show();
  };

  const onPressModal = () => {
    modalRef.current?.hide();
    navigation.popToTop();
    navigation.navigate('EmotionBeadList');
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
      <BaseModal ref={modalRef} contentContainerStyle={styles.modalContent}>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  imageContainer: {width: 60, height: 80, marginTop: 16},
  brain: {position: 'absolute', width: 60, height: 60, bottom: 0},
  dizzy: {position: 'absolute', width: 55, height: 55, right: -28},
  editSection: {
    backgroundColor: '#D9D9D9',
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 32,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  header: {flexDirection: 'row', gap: 8, marginTop: 8},
  bead: {width: 72, height: 72},
  headerText: {},
  paper: {
    height: 200,
    backgroundColor: '#FFFFFA',
    borderRadius: 4,
    marginTop: 20,
  },
  completed: {backgroundColor: '#D9D9D9'},
  paperInput: {
    paddingHorizontal: 16,
    color: '#000000',
  },
  submitButton: {
    backgroundColor: '#FFC24B',
    width: 160,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 12,
  },
  modalContent: {
    alignItems: 'center',
    width: 256,
    height: 224,
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  modalImage: {width: 55, height: 55},
});

export default MakeEmotionBead;
