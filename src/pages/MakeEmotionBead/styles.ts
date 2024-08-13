import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  imageContainer: {width: 60, height: 80, marginTop: 16},
  brain: {position: 'absolute', width: 60, height: 60, bottom: 0},
  dizzy: {position: 'absolute', width: 55, height: 55, right: -28},
  editSection: {
    backgroundColor: '#D9D9D9',
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 32,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  header: {flexDirection: 'row', gap: 8, marginTop: 8},
  bead: {width: 72, height: 72},
  headerText: {},
  paper: {
    height: 200,
    backgroundColor: '#FFFFFA',
    borderRadius: 4,
    marginTop: 20,
  },
  completed: {backgroundColor: '#D9D9D9'},
  paperInput: {
    paddingHorizontal: 16,
    color: '#000000',
  },
  submitButton: {
    backgroundColor: '#FFC24B',
    width: 160,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 12,
  },
  modalContent: {
    alignItems: 'center',
    width: 256,
    height: 224,
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  modalImage: {width: 55, height: 55},
});

export default styles;
