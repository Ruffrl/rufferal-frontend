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
  RButton,
  RFormError,
  RFormInput,
  RPageHeader,
  RPrototypeTemplate,
  RStepProgress,
  verticalScaleTW,
} from '../../../..';

type CreateProfileNameProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateForward?: () => void;
};

type ProfileNameForm = {
  forename: string;
  surname: string;
};

const profileNameSchema: yup.ObjectSchema<ProfileNameForm> = yup
  .object({
    forename: yup
      .string()
      .trim()
      .required('First name is a required field')
      .max(50, 'First name cannot exceed 50 characters'),
    surname: yup
      .string()
      .trim()
      .required('Last name is a required field')
      .max(50, 'Last name cannot exceed 50 characters'),
  })
  .required();

export const RCreateProfileName = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    navigateBack,
    navigateForward,
  }: CreateProfileNameProps): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    /* REACT HOOK FORM */
    const {
      control,
      handleSubmit,
      formState: { errors, isDirty },
    } = useForm<ProfileNameForm>({
      resolver: yupResolver(profileNameSchema),
      defaultValues: {
        forename: '',
        surname: '',
      },
      mode: 'onBlur',
    });

    const onSubmit = handleSubmit(async (data: ProfileNameForm) => {
      setLoading(true);

      if (process.env['NODE_ENV'] === 'development') {
        console.log(
          'BLARG Priya handle submitting profile creation with your backend',
          data
        );
        // observableAccountStore.setEmail(data.email);
        navigateForward?.();
      } else {
        const url =
          Platform.OS === 'android'
            ? 'http://10.0.2.2:5000/create-profile'
            : 'http://localhost:5000/create-profile';

        // Handle form submission
        setError('');

        try {
          // BLARG - TODO
          // observableAccountStore.setEmail(data.email);
          console.log('BLARG todo', url);
        } catch (err) {
          setError(String(err));
        } finally {
          setLoading(false);
        }
      }
    });

    return (
      <RPrototypeTemplate
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <View style={tw`justify-between h-full`}>
          <View>
            {/* PROGRESS BAR */}
            <View style={tw`pt-${verticalScaleTW(12)}`}>
              <RStepProgress step={1} total={4} />
            </View>
            {/* HEADER */}
            <RPageHeader header="What's your name?" />
            <View style={tw`gap-${verticalScaleTW(16)}`}>
              {/* DISCLAIMER */}
              <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
                Rufferal will only identify you by your first name and last
                initial.
              </Text>
              {/* FIRST NAME FORM */}
              <Controller
                name="forename"
                control={control}
                render={({ field: { onBlur, onChange, value, ref } }) => (
                  <RFormInput
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                    formRef={ref}
                    label="First name"
                    placeholder="Anita"
                    error={errors.forename}
                    onSubmit={onSubmit}
                  />
                )}
              />
              {/* LAST NAME FORM */}
              <Controller
                name="surname"
                control={control}
                render={({ field: { onBlur, onChange, value, ref } }) => (
                  <RFormInput
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                    formRef={ref}
                    label="Last name"
                    placeholder="Radcliffe"
                    error={errors.surname}
                    onSubmit={onSubmit}
                  />
                )}
              />
            </View>
          </View>
          <View style={tw`mb-${verticalScaleTW(96)}`}>
            {/* FORM ERRORS */}
            {error && <RFormError error={error} />}
            {/* FORM SUBMIT */}
            <RButton
              title="Continue"
              onPress={onSubmit}
              loading={loading}
              state={isDirty ? 'default' : 'disabled'}
            />
          </View>
        </View>
      </RPrototypeTemplate>
    );
  }
);
