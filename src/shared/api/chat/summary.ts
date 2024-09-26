import {useMutation} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

type ReqDTO = {
  chatId: string; //  '66ed2297fd3e3a8d857b7cb0'
};

type ResDTO = {
  data: ChatSummaryDTO;
};

export type ChatSummaryDTO = {
  keyword: string[]; // ['상담', '사내 분위기', '상의', '제안'];
  summary: string; //  'testuser01님이 사내 분위기를 띄우는 방법에 대해 상담을 요청했습니다.';
  emotion: string; //  '기대';
  strength: string; //  '2';
  combined_emotions: {
    emotion1: string; //  '기대';
    emotion2: string; //  '기쁨';
    combined_emotion: string; //  '환희';
    strength: string; //  '3';
  }[];
};

const request = (body: ReqDTO) => {
  return api.post<ResDTO>('/chat/summary', body);
};

const useApiChatSummary = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useApiChatSummary;
