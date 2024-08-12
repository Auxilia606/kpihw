import React from 'react';

import SimpleButton from '../SimpleButton';

import {SelectableButtonProps} from './types';

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
