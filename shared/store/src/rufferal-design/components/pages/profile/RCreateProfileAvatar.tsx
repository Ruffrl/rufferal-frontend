import * as React from 'react';
import tw from 'twrnc';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';
import { ImagePickerResponse } from 'react-native-image-picker';

import {
  RAccessTemplate,
  RButton,
  RFormImageInput,
  RFormError,
  RPageHeader,
  RStepProgress,
  verticalScaleTW,
} from '../../../..';

type CreateProfileAvatarProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
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
    navigateBack,
    navigateForward,
  }: CreateProfileAvatarProps): React.ReactElement => {
    /* STATE */
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [photo, setPhoto] = useState<ImagePickerResponse | null>(null);

    // const result = await launchCamera(options ?)
    // const result = await launchImageLibrary(options?);

    /* REACT HOOK FORM */
    const form = useForm<ProfileAvatarForm>({
      resolver: yupResolver(profileAvatarSchema),
      defaultValues: {
        avatar: undefined,
      },
      mode: 'onBlur',
    });

    const {
      register,
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
        // navigateForward?.();
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

    // const handleChoosePhoto = () => {
    //   launchImageLibrary({ mediaType: 'photo' }, (response) => {
    //     console.log('BLARG response: ', response);
    //     console.log('BLARG response.assets[0]: ', response.assets?.[0]);
    //     console.log(
    //       'BLARG response.assets?.[0].uri: ',
    //       response.assets?.[0].uri
    //     );
    //     if (response) {
    //       setPhoto(response);
    //     }
    //   });
    // };

    // const handleUploadPhoto = () => {
    //   const url =
    //     Platform.OS === 'android'
    //       ? 'http://10.0.2.2:5000/create-profile'
    //       : 'http://localhost:5000/create-profile';

    //   fetch(url, {
    //     method: 'POST',
    //     body: createFormData(photo, { userId: '123' }),
    //   })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log('response', response);
    //     })
    //     .catch((error) => {
    //       console.log('error', error);
    //     });
    // };

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
              <RStepProgress step={2} total={3} />
              {/* HEADER */}
              <RPageHeader header="Upload your profile photo" />
              {/* Disclaimer */}
              <Text>
                This helps identify who you are to the Rufferal pet caretakers
                and community.
              </Text>
              {/* AVATAR FORM */}
              {/* IMAGE SELECTOR FORM */}
              <Controller
                name="avatar"
                control={control}
                // render={({ field: { onBlur, onChange, value, ref } }) => {
                render={({ field }) => {
                  // const inputRef = ref || useRef(null);
                  // const blarg = ref.current as HTMLInputElement
                  // const inputRef = useRef(ref);
                  // const bloof = inputRef.current;
                  // console.log('BLARG bloof: ', bloof);
                  return (
                    // <RFormInput
                    //   onBlur={onBlur} // notify when input is touched
                    //   onChange={onChange} // send value to hook form
                    //   value={value}
                    //   formRef={ref}
                    //   label="First name"
                    //   placeholder="Anita"
                    //   error={errors.avatar}
                    //   onSubmit={onSubmit}
                    // />
                    <RFormImageInput field={field} />
                  );
                }}
              />
              {/* <RFileInput register={register} /> */}
              {/* Image upload field */}
              <Text>⭕️</Text>
              {/* Error handling */}
              <Text>Conditional error display</Text>
              {/* Submit button and handler */}
              <Text>Add from library</Text>
              {/* Submit button and handler */}
              <Text>Take photo</Text>
            </View>
          </FormProvider>
          <View style={tw`mb-${verticalScaleTW(96)}`}>
            {/* FORM ERRORS */}
            {error && <RFormError error={error} />}
            <RFormError error="test" />
            {/* FORM SUBMIT */}
            <RButton
              title="Continue"
              onPress={onSubmit}
              loading={loading}
              // state={isDirty ? 'default' : 'disabled'}
            />
          </View>
        </View>
      </RAccessTemplate>
    );
  }
);
