import {useMutation} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

type ReqDTO = {
  botId: string; //  '66ed2297fd3e3a8d857b7cb0'
};

type ResDTO = {
  data: ChatDTO;
};

type ChatDTO = {
  userId: string; // '66e29c547b6d26e16047de6b';
  botId: string; // '66ed2297fd3e3a8d857b7cb0';
  startedAt: Date; // '2024-09-26T01:41:50.464Z';
  endedAt: Date;
  status: 'active' | 'inactive'; // 'active';
  messages: [];
  _id: string; // '66f4bbdecbd2bf8b9b7373ff';
};

const request = (body: ReqDTO) => {
  return api.post<ResDTO>('/chat/create', body);
};

const useApiChatCreate = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useApiChatCreate;
