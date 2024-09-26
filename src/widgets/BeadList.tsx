import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {EmotionBead} from '@shared/api/emotion-bead/list';
import Bead from '@shared/assets/image/Bead.png';

type BeadListProps = {data: EmotionBead[]};

const renderItem: ListRenderItem<EmotionBead> = () => {
  return (
    <TouchableOpacity>
      <Image style={styles.bead} source={Bead} />
    </TouchableOpacity>
  );
};

const BeadList = (props: BeadListProps) => {
  const {data} = props;

  return <FlatList data={data} renderItem={renderItem} numColumns={4} />;
};

const styles = StyleSheet.create({
  bead: {width: 48, height: 48},
});

export default BeadList;
