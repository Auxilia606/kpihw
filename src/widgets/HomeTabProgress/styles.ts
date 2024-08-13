import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: 30,
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  label: {
    alignSelf: 'flex-start',
  },
});

export default styles;
