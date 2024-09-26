import {useQuery} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

type ReqDTO = {
  page: string;
  limit: string;
};

type ResDTO = {
  data: ChatBotDTO[];
};

export type ChatBotDTO = {
  _id: string; //
  name: string; //
  prompt: string; // '상담원으로써 대화해주세요. 가급적이면 대화형식으로 답변해주세요.';
  avatarUrl: string; // '/url/abcde';
  description: string; // '기본적인 상담 챗봇입니다. 대화형 챗봇의 형태를 가지고 있습니다.';
};

const request = (query: ReqDTO) => {
  return api.get<ResDTO>(`/chatbot/list?${String(new URLSearchParams(query))}`);
};

const useApiChatbotList = (query: ReqDTO) => {
  return useQuery({
    queryFn: () => request(query),
    queryKey: ['chatbot', 'list', query],
  });
};

export default useApiChatbotList;
