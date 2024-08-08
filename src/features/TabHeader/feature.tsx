import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {TabHeaderProps} from './types';

const TabHeader = (props: TabHeaderProps) => {
  const {title} = props;

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default TabHeader;
