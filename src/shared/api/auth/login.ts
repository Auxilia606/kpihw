import {api} from '../config';

import {useMutation} from '@tanstack/react-query';

type ReqDTO = {
  email: string; // 'testuser01@test.com';
  password: string; // 'dweax123!@#';
};

const request = (body: ReqDTO) => {
  return api.post('/auth/login', body);
};

const useAuthLogin = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useAuthLogin;
