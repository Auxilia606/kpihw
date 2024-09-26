import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

import BaseModal, {BaseModalControl} from '@entities/BaseModal';
import CustomText from '@shared/components/CustomText';

type ConfirmModalProps = {
  modalRef: React.RefObject<BaseModalControl>;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const ConfirmModal = (props: ConfirmModalProps) => {
  const {
    modalRef,
    title,
    cancelText = '취소',
    confirmText = '확인',
    description,
    onCancel,
    onConfirm,
  } = props;

  const onPressModalConfirm = () => {
    modalRef.current?.hide();
    onConfirm && onConfirm();
  };

  const onPressModalCancel = () => {
    modalRef.current?.hide();
    onCancel && onCancel();
  };

  return (
    <BaseModal ref={modalRef} contentContainerStyle={styles.modalContainer}>
      <CustomText fontSize="lg">{title}</CustomText>
      <CustomText fontSize="md">{description}</CustomText>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressModalCancel} textColor="#ff3b3b">
          {cancelText}
        </Button>
        <Button onPress={onPressModalConfirm} textColor="#5050ff">
          {confirmText}
        </Button>
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 40,
    padding: 20,
    gap: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ConfirmModal;
