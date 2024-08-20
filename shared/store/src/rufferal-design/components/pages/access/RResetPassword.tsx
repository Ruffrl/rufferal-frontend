import * as React from 'react';
import tw from 'twrnc';
import * as yup from 'yup';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import {
  RAccessTemplate,
  RButton,
  RFormError,
  RFormInput,
  RLinkButton,
  RPasswordValidator,
} from '../..';
import { moderateScaleTW, verticalScaleTW } from '../../../utils';

type ResetPasswordProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
  navigateBack: () => void;
  navigateLogin?: () => void;
  navigateSignup: () => void;
};

type ResetPasswordForm = {
  password: string;
};

const resetPasswordSchema: yup.ObjectSchema<ResetPasswordForm> = yup
  .object({
    password: yup
      .string()
      .trim()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/g, 'Password must contain at least 1 uppercase letter')
      .matches(/[a-z]/g, 'Password must contain at least 1 lowercase letter')
      .matches(/[0-9]/g, 'Password must contain at least 1 number')
      .max(64, 'Password cannot exceed 64 characters'),
  })
  .required();

export const RResetPassword = ({
  mobileBackIcon,
  mobileCloseIcon,
  mobileIconHide,
  mobileIconView,
  navigateBack,
  navigateLogin,
  navigateSignup,
}: ResetPasswordProps): React.ReactElement => {
  // BLARG - you can only reach this page with a valid email link - HOW?
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  /* ASYNC OR LOCAL STORAGE */
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('reset-email');
      if (value !== null) {
        // value previously stored
        setEmail(value);
        return value;
      }
    } catch (e) {
      // error reading value
      console.log('ERROR: ', e);
    }
    return null;
  };

  useEffect(() => {
    getData();
  }, [email]);

  /* REACT HOOK FORM */
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
    },
    /* Using onChange sparingly
     * Validation is triggered on the changeevent for each input,
     * leading to multiple re-renders.
     * Warning: this often comes with a significant impact on performance.
     */
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async (data: ResetPasswordForm) => {
    setLoading(true);

    if (process.env['NODE_ENV'] === 'development') {
      console.log(
        'BLARG Priya handle resetting password with your backend',
        data
      );
      await AsyncStorage.removeItem('reset-email');
      navigateLogin?.();
    } else {
      const url =
        Platform.OS === 'android'
          ? 'http://10.0.2.2:5000/reset-password'
          : 'http://localhost:5000/reset-password';

      // Handle form submission
      setError('');

      try {
        // BLARG - TODO
        // How will we confirm that the email is valid without exposing to users?
        // I assume some short lived token that we get back from http://localhost:5000/request-password-reset
        // Submit email, resetToken, and new password for successfull update of password
        console.log('BLARG todo', url);
        await AsyncStorage.removeItem('reset-email');
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
  });

  const SignupLink = () => (
    <Text
      style={tw`
      tracking-wide
      text-zinc-900
      mt-${verticalScaleTW(16)}
      text-${moderateScaleTW(12)} 
    `}
    >
      New to Rufferal? <Text style={tw`font-bold`}>Sign up</Text>
    </Text>
  );

  if (!email) return <Text>Loading...</Text>;

  return (
    <RAccessTemplate
      header="Reset your password"
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      <View style={tw`gap-${verticalScaleTW(16)}`}>
        <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
          Hi {email}! Update your password.
        </Text>
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <RFormInput
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value}
              formRef={ref}
              label="New password"
              placeholder="••••••••"
              error={errors.password}
              onSubmit={onSubmit}
              isPassword
              mobileIconHide={mobileIconHide}
              mobileIconView={mobileIconView}
            />
          )}
        />
        <RPasswordValidator password={getValues('password')} />
        {error && <RFormError error={error} />}
        <RButton title="Continue" onPress={onSubmit} loading={loading} />
      </View>
      <RLinkButton onPress={navigateSignup} customText={<SignupLink />} />
    </RAccessTemplate>
  );
};
