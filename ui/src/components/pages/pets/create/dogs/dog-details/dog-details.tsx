import { yupResolver } from '@hookform/resolvers/yup';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps, PetDetails } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, View } from 'react-native';

import {
  Button,
  FieldHelper,
  HorizontalDivider,
  ProgressBar,
} from '../../../../../atoms';
import { Input, RadioGroup, Select } from '../../../../../molecules';
import { ScrollFeatureTemplate } from '../../../../../templates';
import {
  DOG_AGE_OPTIONS,
  DOG_BREED_OPTIONS,
  DOG_COLOR_OPTIONS,
  DOG_SIZE_OPTIONS,
  SEX_OPTIONS,
  STATUS_OPTIONS,
} from '../../shared/pet-details-options';
import { petDetailsSchema } from '../../shared/pet-profile-forms';
import { SecondaryFormHeader } from '../../shared/secondary-form-header/secondary-form-header';

export const DogDetails = observer(({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  let defaults: PetDetails | undefined;

  if (observablePetStore.editingPetId) {
    defaults = observablePetStore.currentEditingPet()?.details;
  }

  /* REACT HOOK FORM */
  const form = useForm<PetDetails>({
    resolver: yupResolver(petDetailsSchema('dog')),
    mode: 'onBlur',
    defaultValues: defaults || {
      species: 'dog',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(async (data: PetDetails) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      if (observablePetStore.editingPetId) {
        const petId = observablePetStore.editingPetId;
        observablePetStore.updatePet({ id: petId, details: data });
      } else {
        observablePetStore.createPet({ details: data });
      }
      setLoading(false);
      navigation.navigate('Dog Avatar');
    } else {
      // Handle form submission
      setError('');

      try {
        console.log('BLARG:TODO - handle backend submission', data);
        navigation.navigate('Dog Avatar');
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <ScrollFeatureTemplate
      backNavigation={() => navigation.navigate('Manage Pets')}
    >
      <FormProvider {...form}>
        <View style={ruffwind`mt-${moderateScaleTW(24)}`}>
          <ProgressBar step={1} total={4} />
        </View>

        <View
          style={ruffwind`mt-${moderateScaleTW(24)} gap-${moderateScaleTW(20)}`}
        >
          <SecondaryFormHeader
            header="Add a dog"
            species="dog"
            subHeader="Required information"
            subHeaderBold
          />

          <View style={ruffwind`gap-${moderateScaleTW(12)}`}>
            <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
              <Controller
                name="name"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    errorMessage={errors.name?.message}
                    label="Name"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <Controller
                name="color"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Select
                    data={DOG_COLOR_OPTIONS}
                    errorMessage={errors.color?.value?.message}
                    label="Color"
                    labelField="label"
                    onBlur={onBlur}
                    onChange={onChange}
                    searchField="label"
                    value={value?.id}
                    valueField="id"
                  />
                )}
              />
              <Controller
                name="breed"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Select
                    data={DOG_BREED_OPTIONS}
                    errorMessage={errors.breed?.value?.message}
                    label="Breed"
                    labelField="label"
                    onBlur={onBlur}
                    onChange={onChange}
                    searchField="label"
                    value={value?.id}
                    valueField="id"
                  />
                )}
              />
            </View>
            <View>
              <Controller
                name="sex"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <RadioGroup
                    data={SEX_OPTIONS}
                    errorMessage={errors.sex?.value?.message}
                    label="Sex"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            <View>
              <Controller
                name="age"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <RadioGroup
                    data={DOG_AGE_OPTIONS}
                    errorMessage={errors.age?.value?.message}
                    label="Age"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            <View>
              <Controller
                name="size"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <RadioGroup
                    data={DOG_SIZE_OPTIONS}
                    errorMessage={errors.size?.value?.message}
                    label="Size"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            <View>
              <Controller
                name="status"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <RadioGroup
                    data={STATUS_OPTIONS}
                    errorMessage={errors.status?.value?.message}
                    label="Spayed/neutered?"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </View>
          </View>
        </View>

        <View
          style={ruffwind.style(
            `mt-${moderateScaleTW(16)} gap-${moderateScaleTW(8)}`,
            !isIOS && `mb-${moderateScaleTW(16)}`
          )}
        >
          <HorizontalDivider color="border-amethystSmoke-600" />
          {error && <FieldHelper text={error} align={'text-center'} />}
          <Button text="Next" onPress={onSubmit} loading={loading} />
          <Button
            text="Cancel"
            type="transparent"
            size="standard-short"
            onPress={() => {
              observablePetStore.setEditing({ id: undefined });
              navigation.navigate('Manage Pets');
            }}
            loading={loading}
          />
        </View>
      </FormProvider>
    </ScrollFeatureTemplate>
  );
});
