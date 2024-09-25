import React, {useMemo} from 'react';

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

  console.log(emotionList);

  return (
    <Wrapper>
      <CustomText>감정구슬 모아보기</CustomText>
    </Wrapper>
  );
};

export default EmotionBeadList;
