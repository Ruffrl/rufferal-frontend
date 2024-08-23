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
  catBreedOptions,
  catCoatOptions,
  catColorOptions,
} from './form-options';

type CreateCatForm = {
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

const createCatSchema: yup.ObjectSchema<CreateCatForm> = yup
  .object({
    photo: yup.string().required('Please provide a photo of your cat'),
    name: yup.string().required('Please provide a name for your cat'),
    color: yup.string().required("Please provide your cat's color"),
    breed: yup.string(),
    coatLength: yup.string(),
    age: yup.string().required("Please provide your cat's age"),
    size: yup.string().required("Please provide your cat's size"),
    sex: yup.string().required("Please provide your cat's sex"),
    status: yup
      .string()
      .required("Please provide your cat's sterilization status"),
  })
  .required();

export const RFormCreateCat = ({
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
  const form = useForm<CreateCatForm>({
    resolver: yupResolver(createCatSchema),
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

  const onSubmit = handleSubmit(async (data: CreateCatForm) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      console.log('BLARG Priya handle create cat with your backend', data);
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
              placeholder="KitKat"
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
              options={catColorOptions}
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
              options={catBreedOptions}
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
              options={catCoatOptions}
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
                'Kitten (0–9 months)',
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
                'Small (0–6 lbs)',
                'Medium (7–11 lbs)',
                'Large (12–16 lbs)',
                'Extra large (16+ lbs)',
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
