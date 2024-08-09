import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // font weight
  normal: {fontWeight: '400'},
  medium: {fontWeight: '600'},
  bold: {fontWeight: '700'},

  // font size
  sm: {fontSize: 8, lineHeight: 20, letterSpacing: -8 * 0.05},
  md: {fontSize: 12, lineHeight: 23, letterSpacing: -12 * 0.05},
  lg: {fontSize: 20, lineHeight: 23, letterSpacing: -20 * 0.05},
});

export default styles;
