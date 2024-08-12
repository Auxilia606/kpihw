import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emotionList: {marginTop: 32, gap: 16},
  emotionItem: {
    backgroundColor: '#D9D9D9',
    width: 200,
    borderWidth: 0,
    borderRadius: 0,
  },
  emotionItemSelected: {backgroundColor: '#FFB21D'},
  buttonContainer: {
    marginTop: 32,
    gap: 40,
  },
});

export default styles;
