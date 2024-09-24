import { yupResolver } from '@hookform/resolvers/yup';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps, PetDetails } from '@rufferal/types';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';

import {
  Button,
  FieldHelper,
  H3,
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
  petDetailsSchema,
  SEX_OPTIONS,
  STATUS_OPTIONS,
} from '../../pet-details-options';

export const DogDetails = ({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  /* REACT HOOK FORM */
  const form = useForm<PetDetails>({
    resolver: yupResolver(petDetailsSchema('dog')),
    mode: 'onBlur',
    // BLARG:TODO - RHF with RN doesn't scroll on error, so find a custom solution (https://dev.to/shaswatprabhat/auto-scroll-in-react-native-forms-3k16)
    shouldFocusError: true,
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
      navigation.navigate('Dog Avatar');
    } else {
      // const url =
      //   Platform.OS === 'android'
      //     ? 'http://10.0.2.2:5000/create-profile'
      //     : 'http://localhost:5000/create-profile';

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
        <View style={ruffwind`mt-6`}>
          <ProgressBar step={1} total={4} />
        </View>

        <View style={ruffwind`mt-6 gap-5`}>
          <View style={ruffwind`gap-2`}>
            <H3 text="Add a dog" />
            <Text
              style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}
            >
              Required information
            </Text>
          </View>

          <View style={ruffwind`gap-3`}>
            <View style={ruffwind`gap-1`}>
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

        <View style={ruffwind.style(`mt-4 gap-2`, !isIOS && `mb-4`)}>
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
};
