import {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IStorage {
  userId?: string;
}

const useStorage = () => {
  const setData = useCallback(
    async <T extends keyof IStorage>(key: T, value: IStorage[T]) => {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    [],
  );

  const getData = useCallback(
    async <T extends keyof IStorage>(key: T): Promise<IStorage[T]> => {
      try {
        const rawData = (await AsyncStorage.getItem(key)) || '';

        return JSON.parse(rawData);
      } catch (error) {
        console.error('[ERROR] AsyncStorage 에러', error);

        return;
      }
    },
    [],
  );

  const removeData = useCallback(async <T extends keyof IStorage>(key: T) => {
    await AsyncStorage.removeItem(key);
  }, []);

  const clearAllData = useCallback(async () => {
    await AsyncStorage.clear();
  }, []);

  return {setData, getData, removeData, clearAllData};
};

export default useStorage;
