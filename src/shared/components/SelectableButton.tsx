import React from 'react';
import {ViewStyle} from 'react-native';

import SimpleButton, {SimpleButtonProps} from './SimpleButton';

type SelectableButtonProps = SimpleButtonProps & {
  isSelected: boolean;
  selectedStyle?: ViewStyle;
};

const SelectableButton = (props: SelectableButtonProps) => {
  const {isSelected, selectedStyle, ...buttonProps} = props;

  return (
    <SimpleButton
      {...buttonProps}
      style={[buttonProps.style, isSelected && selectedStyle]}
    />
  );
};

export default SelectableButton;
