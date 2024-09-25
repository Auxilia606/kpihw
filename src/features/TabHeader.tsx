import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TabHeaderProps = {
  title: string;
};

const TabHeader = (props: TabHeaderProps) => {
  const {title} = props;

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    marginBottom: 10,
  },
  headerTitle: {
    width: 'auto',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TabHeader;
