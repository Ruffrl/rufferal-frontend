import * as React from 'react';
import tw from 'twrnc';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';

import {
  moderateScaleTW,
  observableAccountStore,
  RButton,
  RFormError,
  RFormInput,
  RLinkButton,
  RPrototypeTemplate,
  verticalScaleTW,
} from '../../../..';

type ForgotPasswordProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack?: () => void;
  navigateResetPassword?: () => void;
};

type RequestPasswordForm = {
  email: string;
};

const requestPasswordSchema: yup.ObjectSchema<RequestPasswordForm> = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Email is a required field')
      .email('Email must be in format you@email.com')
      .max(320, 'Password cannot exceed 320 characters'),
  })
  .required();

export const RForgotPassword = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    navigateBack,
    navigateResetPassword,
  }: ForgotPasswordProps): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    /* REACT HOOK FORM */
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<RequestPasswordForm>({
      resolver: yupResolver(requestPasswordSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onBlur',
    });

    const onSubmit = handleSubmit(async (data: RequestPasswordForm) => {
      setLoading(true);

      if (process.env['NODE_ENV'] === 'development') {
        console.log(
          'BLARG Priya handle request password reset with your backend',
          data
        );
        observableAccountStore.setEmail(data.email);
        navigateResetPassword?.();
      } else {
        const url =
          Platform.OS === 'android'
            ? 'http://10.0.2.2:5000/request-password-reset'
            : 'http://localhost:5000/request-password-reset';

        // Handle form submission
        setError('');

        try {
          // BLARG - TODO
          observableAccountStore.setEmail(data.email);
          console.log('BLARG todo', url);
        } catch (err) {
          setError(String(err));
        } finally {
          setLoading(false);
        }
      }
    });

    const handleResend = async () => {
      console.log('BLARG dksfjlsdfkjl');
      if (process.env['NODE_ENV'] === 'development') {
        console.log(
          'BLARG Priya handle resend password reset with your backend',
          observableAccountStore.email
        );
      } else {
        const url =
          Platform.OS === 'android'
            ? 'http://10.0.2.2:5000/request-password-reset'
            : 'http://localhost:5000/request-password-reset';

        // Handle form submission
        setLoading(true);
        setError('');

        try {
          // BLARG - TODO
          console.log('BLARG todo', url);
        } catch (err) {
          setError(String(err));
        } finally {
          setLoading(false);
        }
      }
    };

    return (
      <RPrototypeTemplate
        header="Reset your password"
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <View style={tw`gap-${verticalScaleTW(16)}`}>
          <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
            Create a new password
          </Text>
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
                label="Email address"
                placeholder="rufferer@rufferal.com"
                error={errors.email}
                onSubmit={onSubmit}
              />
            )}
          />
          {/* FORM ERRORS */}
          {error && <RFormError error={error} />}
          {/* FORM SUBMIT */}
          <RButton title="Continue" onPress={onSubmit} loading={loading} />
        </View>
        <View style={tw`mt-${verticalScaleTW(20)} gap-${verticalScaleTW(20)}`}>
          <RLinkButton
            text="Resend email"
            onPress={() => handleResend()}
            state={observableAccountStore.email ? 'default' : 'disabled'}
          />
          {/* DISCLAIMER */}
          <Text
            style={tw`text-${moderateScaleTW(14)} text-gray-500 text-center`}
          >
            Didn't get an email? Wait a few minutes and try again.
          </Text>
        </View>
      </RPrototypeTemplate>
    );
  }
);
