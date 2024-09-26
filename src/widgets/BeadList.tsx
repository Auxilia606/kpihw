import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useBaseModalControl} from '@entities/BaseModal';
import {EmotionBead} from '@shared/api/emotion-bead/list';
import Bead from '@shared/assets/image/Bead.png';

import EmotionBeadModal from './EmotionBeadModal';

type BeadItemProps = EmotionBead;

const BeadItem = (props: BeadItemProps) => {
  const {emotion} = props;
  const {modalRef} = useBaseModalControl();

  const onPress = () => {
    modalRef.current?.show();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.bead} source={Bead} />
      <EmotionBeadModal modalRef={modalRef} emotion={emotion} />
    </TouchableOpacity>
  );
};

type BeadListProps = {data: EmotionBead[]};

const renderItem: ListRenderItem<EmotionBead> = ({item}) => {
  return <BeadItem {...item} />;
};

const BeadList = (props: BeadListProps) => {
  const {data} = props;

  return (
    <>
      <FlatList data={data} renderItem={renderItem} numColumns={4} />
    </>
  );
};

const styles = StyleSheet.create({
  bead: {width: 48, height: 48},
});

export default BeadList;
