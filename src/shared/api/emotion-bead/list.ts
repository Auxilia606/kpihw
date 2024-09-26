import {useQuery} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

type ReqDTO = {
  page: string;
  limit: string;
};

type ResDTO = {
  data: EmotionBead[];
  total: number; // 100;
  current: number; // 1;
};

export type EmotionBead = {
  userId: string;
  emotion: {
    keyword: string[]; // ['상담', '스트레스', '배 아픔'];
    summary: string; // '상담자가 스트레스와 관련된 문제를 상의하였습니다.';
    emotion: string; // '신뢰';
    strength: string; // 3;
    combined_emotions: {
      emotion1: string; // '기쁨';
      emotion2: string; // '신뢰';
      combined_emotion: string; // '사랑';
      strength: string; // 2;
    }[];
  };
  timestamp: Date; // '2024-09-20T06:38:58.107Z';
  content: string; // '상담을 통해 스트레스를 완화하는 방법을 배웠습니다.';
  chatId: string;
};

const request = (query: ReqDTO) => {
  return api.get<ResDTO>(
    `/emotion-bead/list?${String(new URLSearchParams(query))}`,
  );
};

const useApiEmotionBeadList = (query: ReqDTO) => {
  return useQuery({
    queryFn: () => request(query),
    queryKey: ['emotion-bead', 'list', query],
  });
};

export default useApiEmotionBeadList;
