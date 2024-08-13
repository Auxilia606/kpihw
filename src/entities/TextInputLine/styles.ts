import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  scrollContainer: {
    height: 300,
  },
  background: {
    position: 'relative',
    minHeight: 600, // 줄 수에 따라 충분한 높이 설정
  },
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 0.8,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 18,
    lineHeight: 28,
    textAlignVertical: 'top', // Android에서 텍스트가 위쪽에 맞춰지도록 설정
    color: '#000000',
  },
});

export default styles;
