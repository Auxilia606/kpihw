import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {Modal, ModalProps, Portal} from 'react-native-paper';

type BaseModalProps = PropsWithChildren &
  Omit<ModalProps, 'visible' | 'onDismiss'>;

export type BaseModalControl = {
  show(): void;
  hide(): void;
};

const BaseModal = forwardRef<BaseModalControl, BaseModalProps>(
  (props: BaseModalProps, ref) => {
    const {children, ...modalProps} = props;
    const [visible, setVisible] = useState(false); // 모달의 열림/닫힘 상태 관리

    useImperativeHandle(ref, () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      },
    }));

    return (
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          {...modalProps}
          contentContainerStyle={[
            styles.modalContent,
            modalProps.contentContainerStyle,
          ]}>
          {children}
        </Modal>
      </Portal>
    );
  },
);

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#ffffff',
  },
});

export const useBaseModalControl = () => {
  const modalRef = useRef<BaseModalControl>(null);

  return {modalRef};
};

export default BaseModal;
