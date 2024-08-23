import * as React from 'react';
import tw from 'twrnc';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';

import {
  RButton,
  RFormError,
  RFormInput,
  RLinkButton,
  RPasswordValidator,
  RPrototypeTemplate,
  moderateScaleTW,
  observableAccountStore,
  verticalScaleTW,
} from '../../../..';

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
      .required('Please provide a password')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/g, 'Password must contain at least 1 uppercase letter')
      .matches(/[a-z]/g, 'Password must contain at least 1 lowercase letter')
      .matches(/[0-9]/g, 'Password must contain at least 1 number')
      .max(64, 'Password cannot exceed 64 characters'),
  })
  .required();

export const RResetPassword = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    mobileIconHide,
    mobileIconView,
    navigateBack,
    navigateLogin,
    navigateSignup,
  }: ResetPasswordProps): React.ReactElement => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

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
        observableAccountStore.revokeEmail();
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
          observableAccountStore.revokeEmail();
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

    if (!observableAccountStore.email) return <Text>Loading...</Text>;

    return (
      <RPrototypeTemplate
        header="Reset your password"
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <View style={tw`gap-${verticalScaleTW(16)}`}>
          <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
            Hi {observableAccountStore.email}! Update your password.
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
      </RPrototypeTemplate>
    );
  }
);
