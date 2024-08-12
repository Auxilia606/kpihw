import {request} from './request';
import {ReqDTO} from './types';

import {useQuery} from '@tanstack/react-query';

export const useGetSimiliarWordQuery = (body: ReqDTO) => {
  return useQuery({
    queryKey: ['getSimiliarWord', body],
    queryFn: () => request(),
    enabled: !!body.word,
  });
};
