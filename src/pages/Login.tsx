import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, View} from 'react-native';

import {RootStackScreenProps} from '@pages/types';
import BaseInput from '@entities/BaseInput';
import useAuthLogin from '@shared/api/auth/login';
import CustomText from '@shared/components/CustomText';
import Wrapper from '@shared/components/Wrapper';

const Login = (props: RootStackScreenProps<'Login'>) => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {mutateAsync} = useAuthLogin();

  const onPressLogin = handleSubmit(
    async data => {
      try {
        await mutateAsync({email: data.email, password: data.password});
        navigation.replace('Tab', {
          screen: 'HomeNavigator',
        });
      } catch (error) {
        console.log(`[ERROR] 로그인 에러 발생: ${error}`);
      }
    },
    () => {
      console.log('ERROR???');
    },
  );

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
        </View>
        <Button title="로그인" onPress={onPressLogin} />
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
});

export default Login;
