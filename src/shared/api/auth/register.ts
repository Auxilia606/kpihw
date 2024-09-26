import {useMutation} from '@tanstack/react-query';

import {api} from '@shared/configuration/api';

type ReqDTO = {
  username: string; // '홍길동';
  email: string; // 'testuser01@test.com';
  password: string; // 'dweax123!@#';
};

const request = (body: ReqDTO) => {
  return api.post('/auth/register', body);
};

const useApiAuthRegister = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useApiAuthRegister;
