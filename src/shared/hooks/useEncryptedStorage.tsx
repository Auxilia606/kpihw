import {useCallback} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import {UserDTO} from '@shared/api/auth/login';

interface IEncryptedStorage {
  token?: string;
  user?: UserDTO;
}

const useEncryptedStorage = () => {
  const setEData = useCallback(
    async <T extends keyof IEncryptedStorage>(
      key: T,
      value: IEncryptedStorage[T],
    ) => {
      await EncryptedStorage.setItem(key, JSON.stringify(value));
    },
    [],
  );

  const getEData = useCallback(
    async <T extends keyof IEncryptedStorage>(
      key: T,
    ): Promise<IEncryptedStorage[T]> => {
      try {
        const rawData = (await EncryptedStorage.getItem(key)) || '';

        return JSON.parse(rawData);
      } catch (error) {
        console.error('[ERROR] EncryptedStorage 에러', error);

        return;
      }
    },
    [],
  );

  const removeEData = useCallback(
    async <T extends keyof IEncryptedStorage>(key: T) => {
      await EncryptedStorage.removeItem(key);
    },
    [],
  );

  const clearAllEData = useCallback(async () => {
    await EncryptedStorage.clear();
  }, []);

  return {setEData, getEData, removeEData, clearAllEData};
};

export default useEncryptedStorage;
