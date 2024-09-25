import React from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet, TextInputProps, View, ViewStyle} from 'react-native';

export type TextInputLineProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  lineColor?: ViewStyle['backgroundColor'];
} & Pick<TextInputProps, 'numberOfLines' | 'editable'>;

export type BackgroudLineProps = PropsWithChildren &
  Pick<TextInputLineProps, 'numberOfLines' | 'lineColor'>;

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

const styles = StyleSheet.create({
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
});

export default LineBackground;
