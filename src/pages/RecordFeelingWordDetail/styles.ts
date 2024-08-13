import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  emotionList: {marginTop: 32, gap: 16},
  emotionItem: {
    backgroundColor: '#D9D9D9',
    width: 160,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 0,
  },
  emotionItemSelected: {backgroundColor: '#FFB21D'},
  buttonContainer: {
    marginTop: 32,
    gap: 40,
  },
  emotionWord: {
    marginTop: 16,
    backgroundColor: '#FFB21D',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: 240,
  },
  listContainer: {gap: 4, alignItems: 'center'},
  listColumnWrapper: {gap: 4},
});

export default styles;
