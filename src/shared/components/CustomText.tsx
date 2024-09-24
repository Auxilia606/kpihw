import React from 'react';
import {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export type CustomTextProps = PropsWithChildren & {
  fontSize?: Extract<keyof typeof styles, 'sm' | 'md' | 'lg' | 'xl'>;
  fontWeight?: Extract<keyof typeof styles, 'bold' | 'normal' | 'medium'>;
  style?: StyleProp<TextStyle>;
} & Pick<TextStyle, 'color' | 'textAlign'>;

const CustomText = (props: CustomTextProps) => {
  const {
    children,
    fontSize = 'md',
    fontWeight = 'normal',
    color = '#000000',
    textAlign = 'auto',
    style,
  } = props;

  return (
    <Text
      style={[styles[fontSize], styles[fontWeight], {color, textAlign}, style]}>
      {children}
    </Text>
  );
};

const LETTER_SPACING_CONST = -0.05;

const styles = StyleSheet.create({
  // font weight
  normal: {fontWeight: '400'},
  medium: {fontWeight: '500'},
  bold: {fontWeight: '700'},

  // font size
  sm: {fontSize: 8, lineHeight: 20, letterSpacing: 8 * LETTER_SPACING_CONST},
  md: {fontSize: 12, lineHeight: 23, letterSpacing: 12 * LETTER_SPACING_CONST},
  lg: {fontSize: 20, lineHeight: 23, letterSpacing: 20 * LETTER_SPACING_CONST},
  xl: {fontSize: 32, lineHeight: 40, letterSpacing: 32 * LETTER_SPACING_CONST},
});

export default CustomText;
