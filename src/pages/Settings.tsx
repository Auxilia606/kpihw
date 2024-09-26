import React from 'react';
import Config from 'react-native-config';

import {TabScreenProps} from '@pages/types';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

const Page = (props: TabScreenProps<'Settings'>) => {
  const {route} = props;

  return (
    <Wrapper>
      <CustomText>
        SettingPage!! Params: {route.params?.text}
        {Config.ENV}
      </CustomText>
    </Wrapper>
  );
};

export default Page;
