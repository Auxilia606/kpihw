// import {api} from '..';

import {data} from './mock';
// import {ReqDTO, ResDTO} from './types';

export const request = async () => {
  // const {data} = await api.get<ResDTO>(`?${String(new URLSearchParams(body))}`);

  return data;
};
