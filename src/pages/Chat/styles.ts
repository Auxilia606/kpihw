import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Chat Input
  chatInputWrapper: {
    padding: 14,
  },
  chatInput: {
    minHeight: 40,
    maxHeight: 80,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: '#EF458E',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sendIcon: {
    position: 'absolute',
    right: 20,
    top: 24,
  },
});

export default styles;
