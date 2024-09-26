import {useMutation} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

type ReqDTO = {
  chatId: string; // chat id
  userMessage: string; // 메시지
};

type ResDTO = {
  data: MessageDTO[];
};

export type MessageDTO = {
  role: 'user' | 'assistant';
  content: string; // '안녕하세요?';
  timestamp: Date; // '2024-09-26T01:20:06.333Z';
  _id: string; // message id;
};

const request = (body: ReqDTO) => {
  return api.post<ResDTO>('/chat', body);
};

const useApiChat = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useApiChat;
