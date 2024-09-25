import Config from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: Config.API_URL + '/api',
  timeout: 3000,
});

api.interceptors.request.use(async value => {
  const token = await EncryptedStorage.getItem('token');

  if (token) {
    value.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  } else {
    delete value.headers.Authorization;
  }

  return value;
});
