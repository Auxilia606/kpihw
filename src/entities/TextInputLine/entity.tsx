import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import styles from './styles';
import {BackgroudLineProps, TextInputLineProps} from './types';

const LineBackground = (props: BackgroudLineProps) => {
  const {children, numberOfLines = 20, lineColor = '#D9D9D9'} = props;
  const lineHeight = 28; // 각 줄의 높이
  const lines = [];

  for (let i = 0; i < numberOfLines; i++) {
    lines.push(
      <View
        key={i}
        style={[
          styles.line,
          {backgroundColor: lineColor},
          {top: i * lineHeight + 28 + 10},
        ]}
      />,
    );
  }

  return (
    <View style={styles.background}>
      {lines}
      {children}
    </View>
  );
};

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

export default TextInputLine;
