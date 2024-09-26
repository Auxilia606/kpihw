import {useMutation} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

import {ChatSummaryDTO} from '../chat/summary';

type ReqDTO = {
  emotion: ChatSummaryDTO;
  chatId: string;
};

const request = (body: ReqDTO) => {
  return api.post('/emotion-bead/create', body);
};

const useApiEmotionBeadCreate = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useApiEmotionBeadCreate;
