import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

import CustomText from '@shared/components/CustomText';

export type BaseInputProps = {title?: string} & TextInputProps;

const BaseInput = (props: BaseInputProps) => {
  const {title, ...textInputProps} = props;

  return (
    <View style={styles.container}>
      <CustomText fontSize="md">{title}</CustomText>
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 8},
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});

export default BaseInput;
