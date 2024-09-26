import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, View} from 'react-native';
import axios from 'axios';

import {RootStackScreenProps} from '@pages/types';
import BaseInput from '@entities/BaseInput';
import useApiAuthLogin from '@shared/api/auth/login';
import Checkbox from '@shared/components/Checkbox';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';
import useEncryptedStorage from '@shared/hooks/useEncryptedStorage';
import useStorage from '@shared/hooks/useStorage';

const Login = (props: RootStackScreenProps<'Login'>) => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    // formState: {errors},
    setValue,
  } = useForm();

  const {mutateAsync} = useApiAuthLogin();
  const [errorMessage, setErrorMessage] = useState('');
  const [saveId, setSaveId] = useState(false);

  const {getData, setData, removeData} = useStorage();
  const {setEData} = useEncryptedStorage();

  const onPressLogin = handleSubmit(async data => {
    try {
      const response = await mutateAsync({
        email: data.email,
        password: data.password,
      });

      if (saveId) {
        setData('userId', data.email);
      } else {
        removeData('userId');
      }

      setEData('token', response.data.token);

      navigation.replace('Tab', {
        screen: 'HomeNavigator',
        params: {screen: 'Home'},
      });
    } catch (error) {
      console.error('[ERROR] 로그인 에러', error);
      if (!axios.isAxiosError(error)) {
        return;
      }

      if (error.response?.status === 400) {
        setErrorMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    }
  });

  useEffect(() => {
    (async () => {
      const userId = await getData('userId');

      if (userId) {
        setValue('email', userId);
        setSaveId(true);
      }
    })();
  }, [getData, setValue]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <CustomText fontSize="xl" textAlign="center">
          Neuro Mingle
        </CustomText>
        <View style={styles.inputContainer}>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <BaseInput
                title="아이디(이메일)"
                onChangeText={field.onChange} // onChangeText에 명시적으로 연결
                onBlur={field.onBlur}
                value={field.value}
              />
            )}
          />
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <BaseInput
                title="비밀번호"
                onChangeText={field.onChange} // onChangeText에 명시적으로 연결
                onBlur={field.onBlur}
                value={field.value}
                secureTextEntry
              />
            )}
          />
          <CustomText color="#ff0000">{errorMessage}</CustomText>
        </View>
        <Checkbox
          isChecked={saveId}
          setIsChecked={setSaveId}
          text="아이디 기억하기"
        />
        <Button color="#1d56bc" title="로그인" onPress={onPressLogin} />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    gap: 20,
    paddingHorizontal: 40,
  },
  empty: {flex: 1},
  inputContainer: {
    gap: 12,
    height: 200,
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  check: {
    padding: 0,
    margin: 0,
    borderWidth: 5,
    borderColor: 'blue',
  },
  button: {
    backgroundColor: '#1d56bc',
  },
});

export default Login;
