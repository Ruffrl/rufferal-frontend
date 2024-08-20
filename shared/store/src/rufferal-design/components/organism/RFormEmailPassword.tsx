import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAuthStore, User } from '../../../store';
import { moderateScaleTW } from '../../utils';
import { FormErrorProps, RButton, RFormError } from '../atom';
import { RFormInput } from '../molecule';

type LoginInputs = {
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

type FormEmailPasswordProps = {
  navigateAfterLogin?: () => void;
  optionalElement?: React.ReactNode;
  passwordShouldValidate?: boolean;
  submitTitle?: string;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
};

/*
 * BLARG - TODOs
 * move submit handling to parent
 * [optional] can pass password validation boolean that will display helper for password requirements and error if invalid validations
 */
export const RFormEmailPassword = observer(
  ({
    navigateAfterLogin,
    optionalElement,
    passwordShouldValidate = false,
    submitTitle = 'Continue',
    mobileIconHide,
    mobileIconView,
  }: FormEmailPasswordProps): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    // const authStore = useContext(AuthStoreContext);

    // BLARG - update with password validation if passwordShouldValidate prop is passed
    /* REACT HOOK FORM */
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginInputs>({
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
          result.data.attributes &&
            observableAuthStore.setUser(result.data.attributes);
          console.log('result is: ', JSON.stringify(result, null, 4));

          const authHeader = response.headers.get('Authorization') || undefined;
          // Mobile navigation will automatically happen if token status changes
          authHeader && observableAuthStore.setAuth(authHeader);
          // Web navigation only
          navigateAfterLogin?.();
        }
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    });

    return (
      <View style={tw`justify-between flex-1`}>
        <View style={tw`gap-${moderateScaleTW(12)}`}>
          {/* Email field */}
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
          {/* Password field */}
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
                placeholder="••••••••"
                error={errors.password}
                onSubmit={onSubmit}
                isPassword
                mobileIconHide={mobileIconHide}
                mobileIconView={mobileIconView}
              />
            )}
          />

          {/* For optional behaviors or features between password field and submit button */}
          {optionalElement}
        </View>

        {/* Password validation helper - BLARG - should visibly error if invalid password */}
        {passwordShouldValidate && (
          <Text>
            Your password needs to be at least 8 characters long and include a
            number.
          </Text>
        )}

        {/* Submit button */}
        <View>
          {/* Form level errors */}
          {error && <RFormError error={error} />}

          <RButton title={submitTitle} onPress={onSubmit} loading={loading} />
        </View>
      </View>
    );
  }
);
