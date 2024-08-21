// import * as React from 'react';

// import { Text } from 'react-native';
// import { RAccessTemplate } from '../../templates';

// export const RCreateProfileType = (): React.ReactElement => {
//   return (
//     <RAccessTemplate>
//       {/* Navigation */}
//       <Text>⬅️</Text>
//       {/* Navigation */}
//       <Text>🌑️🌑️🌑️🌑️🌑️🌑️🌕🌕🌕</Text>
//       {/* Header */}
//       <Text>What interested you in Rufferal?</Text>
//       {/* Disclaimer */}
//       <Text>Choose one or more.</Text>
//       {/* TYPE FORM */}
//       {/* Radio Card - multiselect */}
//       <Text>I'm looking for pet care</Text>
//       {/* Radio Card - multiselect */}
//       <Text>I want to be a pet caretaker</Text>
//       {/* Error handling */}
//       <Text>Conditional error display</Text>
//       {/* Submit button and handler */}
//       <Text>Continue</Text>
//     </RAccessTemplate>
//   );
// };

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
  RFormCardCheckbox,
  RFormError,
  RPageHeader,
  RStepProgress,
  verticalScaleTW,
} from '../../../..';

type CreateProfileTypeProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateForward?: () => void;
};

type ProfileTypeForm = {
  owner?: boolean;
  caretaker?: boolean;
};

const profileTypeSchema: yup.ObjectSchema<ProfileTypeForm> = yup
  .object({
    owner: yup.boolean(),
    caretaker: yup.boolean(),
  })
  .required();

export const RCreateProfileType = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    navigateBack,
    navigateForward,
  }: CreateProfileTypeProps): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    /* REACT HOOK FORM */
    const form = useForm<ProfileTypeForm>({
      resolver: yupResolver(profileTypeSchema),
      defaultValues: {
        owner: false,
        caretaker: false,
      },
      mode: 'onBlur',
    });

    const {
      control,
      handleSubmit,
      formState: { errors, isDirty },
    } = form;

    const onSubmit = handleSubmit(async (data: ProfileTypeForm) => {
      setLoading(true);

      if (process.env['NODE_ENV'] === 'development') {
        console.log(
          'BLARG Priya handle submitting profile type with your backend',
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
      <RAccessTemplate
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <View style={tw`justify-between h-full`}>
          <View>
            {/* PROGRESS BAR */}
            <RStepProgress step={3} total={4} />
            {/* HEADER */}
            <RPageHeader header="What interested you in Rufferal?" />
            <View style={tw`gap-${verticalScaleTW(16)}`}>
              {/* DISCLAIMER */}
              <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
                Choose one or more.
              </Text>
              {/* FIRST NAME FORM */}
              <View
                style={tw`flex-row justify-between mt-${verticalScaleTW(32)}`}
              >
                <FormProvider {...form}>
                  <Controller
                    name="owner"
                    control={control}
                    render={({ field }) => (
                      <RFormCardCheckbox
                        field={field}
                        title={<>I'm looking{`\n`}for pet care</>}
                        error={errors.owner}
                      />
                    )}
                  />
                  {/* LAST NAME FORM */}
                  <Controller
                    name="caretaker"
                    control={control}
                    render={({ field }) => (
                      <RFormCardCheckbox
                        field={field}
                        title={<>I want to be{`\n`}a pet caretaker</>}
                        error={errors.caretaker}
                      />
                    )}
                  />
                </FormProvider>
              </View>
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
      </RAccessTemplate>
    );
  }
);
