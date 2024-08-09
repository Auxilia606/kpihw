import {StyleSheet} from 'react-native';

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
});

export default styles;
