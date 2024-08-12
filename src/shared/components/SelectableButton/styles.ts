import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  basicText: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.1,
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },
  disabled: {
    backgroundColor: '#bbbbbb',
    borderColor: '#aaaaaa',
  },
  pressed: {backgroundColor: '#aaaaaa'},
});

export default styles;
