import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Chat Header
  chatHeader: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 10,
  },
  chatHeaderTitle: {
    width: 'auto',
    fontSize: 19,
    fontWeight: 'bold',
  },

  // Chat Area
  chatBubble: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  astBubble: {
    backgroundColor: '#EF458E',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  chatDateTime: {
    fontSize: 10,
    marginBottom: 10,
    color: 'rgba(0,0,0,0.5)',
  },

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
