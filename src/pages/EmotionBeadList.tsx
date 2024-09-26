import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import BeadList from '@widgets/BeadList';
import useApiEmotionBeadList from '@shared/api/emotion-bead/list';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

type EmotionBeadListProps = {};

const EmotionBeadList = (props: EmotionBeadListProps) => {
  const {} = props;
  const {data} = useApiEmotionBeadList({limit: '16', page: '1'});

  const emotionList = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.data.data;
  }, [data]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <CustomText fontSize="xl">감정구슬 모아보기</CustomText>
        <BeadList data={emotionList} />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 16, marginTop: 16},
});

export default EmotionBeadList;
