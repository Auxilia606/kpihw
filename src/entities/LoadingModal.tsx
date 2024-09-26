import React from 'react';
import {ActivityIndicator, Modal, Portal} from 'react-native-paper';

type LoadingModalProps = {isLoading: boolean};

const LoadingModal = (props: LoadingModalProps) => {
  const {isLoading} = props;

  if (!isLoading) {
    return null;
  }

  return (
    <Portal>
      <Modal visible>
        <ActivityIndicator size="large" animating />
      </Modal>
    </Portal>
  );
};

export default LoadingModal;
