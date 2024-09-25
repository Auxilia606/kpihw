import Config from 'react-native-config';
import axios from 'axios';

export const api = axios.create({
  baseURL: Config.API_URL + '/api',
  timeout: 3000,
});

api.interceptors.request.use(value => {
  console.log(value);

  return value;
});
