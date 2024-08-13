import React from 'react';
import {Modal, View} from 'react-native';

import styles from './styles';
import {BaseModalProps} from './types';

const BaseModal = (props: BaseModalProps) => {
  const {children, visible, contentStyle} = props;

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.modal}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </View>
    </Modal>
  );
};

export default BaseModal;
