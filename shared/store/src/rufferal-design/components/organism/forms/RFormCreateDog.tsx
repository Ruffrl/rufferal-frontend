import * as React from 'react';
import tw from 'twrnc';
import * as yup from 'yup';

import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  moderateScaleTW,
  RButton,
  RFormError,
  RFormImageInput,
  RFormInput,
  RFormToggleRadio,
  verticalScaleTW,
} from '../../../..';

type CreateDogForm = {
  photo: string;
  name: string;
  color: string;
  breed?: string;
  coatLength?: string;
  age: string;
  size: string;
  sex: string;
  status: string;
};

const createDogSchema: yup.ObjectSchema<CreateDogForm> = yup
  .object({
    photo: yup.string().required('Please provide a photo of your dog'),
    name: yup.string().required('Please provide a name for your dog'),
    color: yup.string().required("Please provide your dog's color"),
    breed: yup.string(),
    coatLength: yup.string(),
    age: yup.string().required("Please provide your dog's age"),
    size: yup.string().required("Please provide your dog's size"),
    sex: yup.string().required("Please provide your dog's sex"),
    status: yup
      .string()
      .required("Please provide your dog's sterilization status"),
  })
  .required();

export const RFormCreateDog = ({
  mobileChevronDownIcon,
  mobilePlusIcon,
  navigateForward,
}: {
  mobileChevronDownIcon?: React.JSX.Element;
  mobilePlusIcon?: React.JSX.Element;
  navigateForward: () => void;
}): React.ReactElement => {
  /* STATE */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  /* REACT HOOK FORM */
  const form = useForm<CreateDogForm>({
    resolver: yupResolver(createDogSchema),
    defaultValues: {
      photo: '',
      name: '',
      color: '',
      breed: undefined,
      coatLength: undefined,
      age: '',
      size: '',
      sex: '',
      status: '',
    },
    mode: 'onBlur',
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = form;
  console.log('BLARG isDirty', isDirty);

  const onSubmit = handleSubmit(async (data: CreateDogForm) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      console.log('BLARG Priya handle create dog with your backend', data);
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
    <View style={tw`gap-${moderateScaleTW(8)}`}>
      <FormProvider {...form}>
        {/* PET PHOTO */}
        <Controller
          name="photo"
          control={control}
          render={({ field }) => (
            <RFormImageInput
              field={field}
              error={errors.photo}
              mobilePlusIcon={mobilePlusIcon}
            />
          )}
        />
        {/* PET NAME */}
        <Controller
          name="name"
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <RFormInput
              label="Name"
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value}
              formRef={ref}
              placeholder="Snickers"
              error={errors.name}
              onSubmit={onSubmit}
            />
          )}
        />
        {/* BLARG - Add a dropdown input */}
        {/* PET COLOR */}
        <Controller
          name="color"
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <RFormInput
              label="Color"
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value}
              formRef={ref}
              placeholder="Select..."
              error={errors.color}
              onSubmit={onSubmit}
            />
          )}
        />
        {/* BLARG - Add `optional` param to rlabel and rforminput` */}
        {/* PET BREED */}
        <Controller
          name="breed"
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <RFormInput
              label="Breed (optional)"
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value}
              formRef={ref}
              placeholder="Select..."
              error={errors.breed}
              onSubmit={onSubmit}
            />
          )}
        />
        {/* PET COAT LENGTH */}
        <Controller
          name="coatLength"
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <RFormInput
              label="Coat length (optional)"
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value}
              formRef={ref}
              placeholder="Select..."
              error={errors.coatLength}
              onSubmit={onSubmit}
            />
          )}
        />
        {/* PET AGE */}
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <RFormToggleRadio
              label="Age"
              field={field}
              error={errors.age}
              toggles={[
                'Puppy (0–9 months)',
                'Young (9 months–2 years)',
                'Adult (2–8 years)',
                'Senior (8+ years)',
              ]}
            />
          )}
        />
        {/* PET SIZE */}
        <Controller
          name="size"
          control={control}
          render={({ field }) => (
            <RFormToggleRadio
              label="Size"
              field={field}
              error={errors.size}
              toggles={[
                'Small (0–25 lbs)',
                'Medium (26–60 lbs)',
                'Large (61–100 lbs)',
                'Extra large (101+ lbs)',
              ]}
            />
          )}
        />
        {/* PET SEX */}
        <Controller
          name="sex"
          control={control}
          render={({ field }) => (
            <RFormToggleRadio
              label="Sex"
              field={field}
              error={errors.sex}
              toggles={['Female', 'Male']}
            />
          )}
        />
        {/* PET STERILIZATION STATUS */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <RFormToggleRadio
              label="Spayed/neutered?"
              field={field}
              error={errors.status}
              toggles={['Yes', 'No']}
            />
          )}
        />
        <View style={tw`mt-${verticalScaleTW(24)} gap-${moderateScaleTW(8)}`}>
          {error && <RFormError error="test error" />}
          {/* BLARG - disabled if form not dirty */}
          <RButton
            title="Next"
            onPress={onSubmit}
            loading={loading}
            state={isDirty ? 'default' : 'disabled'}
          />
        </View>
      </FormProvider>
    </View>
  );
};
