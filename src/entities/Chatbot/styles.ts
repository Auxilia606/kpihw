import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chatbot: {
    // flexShrink: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  chatbotMainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatbotProfile: {
    marginRight: 8,
  },
  chatbotName: {
    flexShrink: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  chatbotDescription: {
    marginTop: 12,
  },
  adContainer: {
    height: 98,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 10,
  },
  chatbotUnlockContainer: {
    flexDirection: 'row',
  },
  chatbotUnlock: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default styles;
