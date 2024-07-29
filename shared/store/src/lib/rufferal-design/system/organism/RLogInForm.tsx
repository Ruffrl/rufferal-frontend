import * as React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { FormErrorProps, RButton, RFormError } from '../atom';
import { RFormInput } from '../molecule';

type LogInInputs = {
  firstName: string;
  email: string;
  password: string;
};

export const RLogInForm = (): React.JSX.Element => {
  /* STATE */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [authToken, setAuthToken] = useState<null | string>(null);
  const url = 'http://localhost:5000/api/login';

  /* REACT HOOK FORM */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /* BEHAVIORS */
  const onSubmit = handleSubmit(async (data) => {
    // Handle form submission
    setLoading(true);
    setError('');

    try {
      //   const response = await fetch('http://localhost:5000/admin/users/1', {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: data.email,
            password: data.password,
          },
        }),
      });

      if (!response.ok) {
        const error: FormErrorProps = await response.json();
        throw new Error(error.error);
      }

      const authHeader = response.headers.get('Authorization');
      setAuthToken(authHeader);

      console.log('BLARG response', response);
      console.log('BLARG authHeader', authHeader);

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  });

  return (
    <View style={{ width: '100%' }}>
      <Text>Logged In: {String(!!authToken)}</Text>

      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          maxLength: 320,
        }}
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <RFormInput
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            formRef={ref}
            label="Email"
            placeholder="rufferer@rufferal.com"
            error={errors.email}
            onSubmit={onSubmit}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          maxLength: 120,
        }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RFormInput
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            formRef={ref}
            label="Password"
            placeholder="************"
            error={errors.password}
            onSubmit={onSubmit}
          />
        )}
      />

      {error && <RFormError error={error} />}
      <RButton title="Log In" onPress={onSubmit} loading={loading} />
    </View>
  );
};
