import React from 'react';
import {PropsWithChildren} from 'react';
import {Modal, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type BaseModalProps = PropsWithChildren & {
  visible: boolean;
  contentStyle?: StyleProp<ViewStyle>;
};

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

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#00000066',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
});

export default BaseModal;
