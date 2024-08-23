import * as React from 'react';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import tw from 'twrnc';
import {
  moderateScaleTW,
  RButton,
  RFormError,
  RFormInput,
  RPasswordValidator,
} from '../../../..';

export type AccessForm = {
  email: string;
  password: string;
};

const accessSchema: yup.ObjectSchema<AccessForm> = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Please provide a valid email')
      .email('Email must be in format you@email.com')
      .max(320, 'Password cannot exceed 320 characters'),
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

type FormEmailPasswordProps = {
  handleLogin?: (data: AccessForm) => void;
  handleSignup?: (data: AccessForm) => void;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
  optionalElement?: React.ReactNode;
  passwordShouldValidate?: boolean;
  submitTitle?: string;
};

export const RFormEmailPassword = observer(
  ({
    handleLogin,
    handleSignup,
    mobileIconHide,
    mobileIconView,
    optionalElement,
    passwordShouldValidate = false,
    submitTitle = 'Continue',
  }: FormEmailPasswordProps): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    /* REACT HOOK FORM */
    const {
      control,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm<AccessForm>({
      resolver: yupResolver(accessSchema),
      defaultValues: {
        email: '',
        password: '',
      },
      /* Using onChange sparingly
       * Validation is triggered on the changeevent for each input,
       * leading to multiple re-renders.
       * Warning: this often comes with a significant impact on performance.
       */
      mode: 'onChange',
    });

    /* BEHAVIORS */
    const onSubmit = handleSubmit(async (data) => {
      // Handle form submission
      setLoading(true);
      setError('');

      try {
        handleLogin?.(data) && handleLogin(data);
        handleSignup?.(data) && handleSignup(data);
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
          {/* PASSWORD VALIDATION */}
          {passwordShouldValidate && (
            <RPasswordValidator password={getValues('password')} />
          )}
          {/* For optional behaviors or features between password field and submit button */}
          {optionalElement}
        </View>

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
