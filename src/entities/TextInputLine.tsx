import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import LineBackground from './LineBackground';

type TextInputLineProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  lineColor?: ViewStyle['backgroundColor'];
} & Pick<TextInputProps, 'numberOfLines' | 'editable'>;

const TextInputLine = (props: TextInputLineProps) => {
  const {text, setText, numberOfLines = 20, editable = true, lineColor} = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <LineBackground numberOfLines={numberOfLines} lineColor={lineColor}>
          <TextInput
            editable={editable}
            style={styles.input}
            value={text}
            onChangeText={setText}
            multiline={true}
            blurOnSubmit={false}
            scrollEnabled={true}
            numberOfLines={numberOfLines}
            placeholder="입력해주세요"
          />
        </LineBackground>
      </ScrollView>
    </View>
  );
};

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

export default TextInputLine;
