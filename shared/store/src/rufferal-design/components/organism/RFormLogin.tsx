import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';
// BLARG - navigate cannot happen in mobile, how do you want to handle navigation differences between web and mobile
// import { useNavigate } from 'react-router-dom';
import { AuthStoreContext, User } from '../../../store';
import { FormErrorProps, RButton, RFormError } from '../atom';
import { RFormInput } from '../molecule';

type LogInInputs = {
  firstName: string;
  email: string;
  password: string;
};

type LoginResponse = {
  data: {
    id: number;
    type: 'user';
    attributes: User;
  };
};

export const RFormLogin = observer(
  ({
    navigateAfterLogin,
  }: {
    navigateAfterLogin: () => void;
  }): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [status, setStatus] = useState(false);

    const authStore = useContext(AuthStoreContext);
    // BLARG - navigate cannot happen in mobile, how do you want to handle navigation differences between web and mobile
    // const navigate = useNavigate();

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
      const url =
        Platform.OS === 'android'
          ? 'http://10.0.2.2:5000/login'
          : 'http://localhost:5000/login';

      setLoading(true);
      setError('');

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              // email: 'rock@gmail.com',
              // password: 'password',
              email: data.email,
              password: data.password,
            },
          }),
        });

        if (!response.ok) {
          const error: FormErrorProps = await response.json();
          throw new Error(error.error);
        } else {
          setStatus(response.ok);

          const authHeader = response.headers.get('Authorization') || undefined;
          authHeader && authStore.setToken(authHeader);
          // console.log('BLARG authHeader', authHeader);

          const result: LoginResponse = await response.json();
          // result
          // =>
          // {
          //   "data": {
          //       "id": "1",
          //       "type": "user",
          //       "attributes": {
          //           "id": 1,
          //           "email": "rock@gmail.com",
          //           "verified": true,
          //           "forename": "Sam",
          //           "surname": "Thomas",
          //           "avatar": null,
          //           "species": "OWNER"
          //         }
          //     }
          // }
          result.data.attributes && authStore.setUser(result.data.attributes);
          console.log('result is: ', JSON.stringify(result, null, 4));

          // BLARG NAVIGATE
          // BLARG - navigate cannot happen in mobile, how do you want to handle navigation differences between web and mobile
          // navigate('/about');
        }
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
        navigateAfterLogin();
      }
    });

    return (
      <View style={{ width: '100%' }}>
        <Text>Logged In: {String(!!status)}</Text>

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
  }
);
