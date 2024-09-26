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

  /* REACT HOOK FORM */
  const form = useForm<PetDetails>({
    resolver: yupResolver(petDetailsSchema('dog')),
    mode: 'onBlur',
    defaultValues: {
      species: 'cat',
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
      observablePetStore.createPet({ details: data });
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
            species="cat"
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
                    label="Name"
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="color"
                control={control}
                render={({ field: { onBlur, onChange } }) => (
                  <Select
                    label="Color"
                    data={DOG_COLOR_OPTIONS}
                    labelField="label"
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    searchField="label"
                    valueField="id"
                    errorMessage={errors.color?.value?.message}
                  />
                )}
              />
              <Controller
                name="breed"
                control={control}
                render={({ field: { onBlur, onChange } }) => (
                  <Select
                    label="Breed"
                    data={DOG_BREED_OPTIONS}
                    labelField="label"
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    searchField="label"
                    valueField="id"
                    errorMessage={errors.breed?.value?.message}
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
                    value={value}
                    data={SEX_OPTIONS}
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    label="Sex"
                    errorMessage={errors.sex?.value?.message}
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
                    value={value}
                    data={DOG_AGE_OPTIONS}
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    label="Age"
                    errorMessage={errors.age?.value?.message}
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
                    value={value}
                    data={DOG_SIZE_OPTIONS}
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    label="Size"
                    errorMessage={errors.size?.value?.message}
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
                    value={value}
                    data={STATUS_OPTIONS}
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    label="Spayed/neutered?"
                    errorMessage={errors.status?.value?.message}
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
            onPress={() => navigation.navigate('Manage Pets')}
            loading={loading}
          />
        </View>
      </FormProvider>
    </ScrollFeatureTemplate>
  );
});
