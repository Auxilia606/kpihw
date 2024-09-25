import {api} from '../config';

import {useMutation} from '@tanstack/react-query';

type ReqDTO = {
  email: string; // 'testuser01@test.com';
  password: string; // 'dweax123!@#';
};

const request = async (body: ReqDTO) => {
  const {data} = await api.post('/auth/login', body);

  console.log(data);

  return data;
};

const useAuthLogin = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};

export default useAuthLogin;
