import * as React from 'react';
import tw from 'twrnc';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';

import {
  moderateScaleTW,
  RAccessTemplate,
  RButton,
  RFormError,
  RFormImageInput,
  RPageHeader,
  RStepProgress,
  verticalScaleTW,
} from '../../../..';

type CreateProfileAvatarProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobilePlusIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateForward?: () => void;
};

type ProfileAvatarForm = {
  avatar?: string;
};

const profileAvatarSchema: yup.ObjectSchema<ProfileAvatarForm> = yup
  .object({
    avatar: yup.string(),
  })
  .required();

export const RCreateProfileAvatar = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    mobilePlusIcon,
    navigateBack,
    navigateForward,
  }: CreateProfileAvatarProps): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    /* REACT HOOK FORM */
    const form = useForm<ProfileAvatarForm>({
      resolver: yupResolver(profileAvatarSchema),
      defaultValues: {
        avatar: undefined,
      },
      mode: 'onBlur',
    });

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = form;

    const onSubmit = handleSubmit(async (data: ProfileAvatarForm) => {
      setLoading(true);

      if (process.env['NODE_ENV'] === 'development') {
        console.log(
          'BLARG Priya handle submitting profile avatar with your backend',
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
          navigateForward?.();
        } catch (err) {
          setError(String(err));
        } finally {
          setLoading(false);
        }
      }
    });

    return (
      <RAccessTemplate
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <View style={tw`justify-between h-full`}>
          <FormProvider {...form}>
            <View>
              {/* PROGRESS BAR */}
              <RStepProgress step={2} total={4} />
              {/* HEADER */}
              <RPageHeader header="Upload your profile photo" />
              {/* Disclaimer */}
              <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
                This helps identify who you are to the Rufferal pet caretakers
                and community.
              </Text>
              {/* AVATAR FORM */}
              {/* IMAGE SELECTOR FORM */}
              <Controller
                name="avatar"
                control={control}
                render={({ field }) => (
                  <RFormImageInput
                    field={field}
                    error={errors.avatar}
                    mobilePlusIcon={mobilePlusIcon}
                  />
                )}
              />
            </View>
          </FormProvider>
          <View style={tw`mb-${verticalScaleTW(96)}`}>
            {/* FORM ERRORS */}
            {error && <RFormError error={error} />}
            {/* FORM SUBMIT */}
            <RButton title="Continue" onPress={onSubmit} loading={loading} />
          </View>
        </View>
      </RAccessTemplate>
    );
  }
);
