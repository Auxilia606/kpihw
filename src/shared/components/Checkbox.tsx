import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {CheckIcon} from '@app/RootNavigator/TabNavigator/tabBarIcon';

import CustomText from './CustomText';

type CheckboxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
};

const Checkbox = (props: CheckboxProps) => {
  const {isChecked, setIsChecked, text} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, isChecked && styles.checkedBox]}
        onPress={() => setIsChecked(prev => !prev)}>
        {isChecked && <CheckIcon color="#ffffff" size={16} />}
      </TouchableOpacity>
      <CustomText fontSize="md">{text}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#4753ff',
  },
  label: {
    marginLeft: 10,
  },
});

export default Checkbox;
