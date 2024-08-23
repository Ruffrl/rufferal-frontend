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
  RFormSelect,
  RFormToggleRadio,
  verticalScaleTW,
} from '../../../..';
import {
  dogBreedOptions,
  dogCoatOptions,
  dogColorOptions,
} from './form-options';

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
        {/* PHOTO */}
        <Controller
          name="photo"
          control={control}
          render={({ field }) => (
            <RFormImageInput
              field={field}
              error={errors.photo}
              mobileBackCamera
              mobilePlusIcon={mobilePlusIcon}
            />
          )}
        />
        {/* NAME */}
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
        {/* BLARG - Convert to multi select */}
        {/* COLOR */}
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <RFormSelect
              label="Color"
              field={field}
              error={errors.color}
              mobileChevronDownIcon={mobileChevronDownIcon}
              options={dogColorOptions}
            />
          )}
        />
        {/* BLARG - Add `optional` param to rlabel and rforminput` */}
        {/* BREED */}
        <Controller
          name="breed"
          control={control}
          render={({ field }) => (
            <RFormSelect
              label="Breed (optional)"
              field={field}
              error={errors.breed}
              mobileChevronDownIcon={mobileChevronDownIcon}
              options={dogBreedOptions}
            />
          )}
        />
        {/* COAT LENGTH */}
        <Controller
          name="coatLength"
          control={control}
          render={({ field }) => (
            <RFormSelect
              label="Coat length (optional)"
              field={field}
              error={errors.coatLength}
              mobileChevronDownIcon={mobileChevronDownIcon}
              options={dogCoatOptions}
            />
          )}
        />
        {/* AGE */}
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
        {/* SIZE */}
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
        {/* SEX */}
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
        {/* STERILIZATION STATUS */}
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
