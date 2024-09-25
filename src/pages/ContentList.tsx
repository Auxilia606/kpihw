import React from 'react';

import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

type ContentListProps = {};

const ContentList = (props: ContentListProps) => {
  const {} = props;

  return (
    <Wrapper>
      <CustomText>감정구슬 모아보기</CustomText>
    </Wrapper>
  );
};

export default ContentList;
