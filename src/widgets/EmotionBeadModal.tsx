import React from 'react';
import {StyleSheet} from 'react-native';

import EmotionBeadDetail from '@features/EmotionBeadDetail';
import BaseModal, {BaseModalControl} from '@entities/BaseModal';
import {EmotionBead} from '@shared/api/emotion-bead/list';

type EmotionBeadModalProps = {
  modalRef: React.RefObject<BaseModalControl>;
  emotion: EmotionBead['emotion'];
};

const EmotionBeadModal = (props: EmotionBeadModalProps) => {
  const {modalRef, emotion} = props;

  return (
    <BaseModal ref={modalRef} contentContainerStyle={styles.contentContainer}>
      <EmotionBeadDetail emotion={emotion} />
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 40,
    padding: 16,
    gap: 8,
  },
});

export default EmotionBeadModal;
