import { yupResolver } from '@hookform/resolvers/yup';
import { ruffwind } from '@rufferal/tailwind';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';
import * as yup from 'yup';

import { PageNavigationProps } from '../../../..';
import {
  Button,
  FieldOption,
  H3,
  HorizontalDivider,
  ProgressBar,
} from '../../../../../atoms';
import { Input, RadioGroup, Select } from '../../../../../molecules';
import { ScrollFeatureTemplate } from '../../../../../templates';
import {
  CAT_AGE_OPTIONS,
  CAT_BREED_OPTIONS,
  CAT_COLOR_OPTIONS,
  CAT_SIZE_OPTIONS,
  SEX_OPTIONS,
  STATUS_OPTIONS,
} from '../../pet-details-options';

type CatDetailsForm = {
  // photo: string;
  name: string;
  // color: string;
  // breed: string;
  // sex: string;
  // age: string;
  // size: string;
  // status: string;
};

const catDetailsSchema: yup.ObjectSchema<CatDetailsForm> = yup
  .object({
    // photo: yup.string().required('Please provide a photo of your cat'),
    name: yup.string().required('Please provide a name for your cat'),
    // color: yup.string().required("Please provide your cat's color"),
    // breed: yup.string().required("Please provide your cat's breed"),
    // sex: yup.string().required("Please provide your cat's sex"),
    // age: yup.string().required("Please provide your cat's age"),
    // size: yup.string().required("Please provide your cat's size"),
    // status: yup
    //   .string()
    //   .required("Please provide your cat's sterilization status"),
  })
  .required();

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  /* REACT HOOK FORM */
  const form = useForm<CatDetailsForm>({
    resolver: yupResolver(catDetailsSchema),
    // defaultValues: {
    //   name: undefined,
    //   color: undefined,
    //   breed: undefined,
    //   age: undefined,
    //   size: undefined,
    //   sex: undefined,
    //   status: undefined,
    // },
    mode: 'onBlur',
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = form;

  const onSubmit = handleSubmit(async (data: CatDetailsForm) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      console.log('BLARG:TODO - handle store submission', data);
      // navigation.navigate('Cat Avatar')
    } else {
      // const url =
      //   Platform.OS === 'android'
      //     ? 'http://10.0.2.2:5000/create-profile'
      //     : 'http://localhost:5000/create-profile';

      // Handle form submission
      setError('');

      try {
        console.log('BLARG:TODO - handle backend submission', data);
        navigation.navigate('Cat Avatar');
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
  });

  const [sex, setSex] = useState<FieldOption>();
  const handleSex = (item: FieldOption) => {
    setSex(item);
  };

  const [age, setAge] = useState<FieldOption>();
  const handleAge = (item: FieldOption) => {
    setAge(item);
  };

  const [size, setSize] = useState<FieldOption>();
  const handleSize = (item: FieldOption) => {
    setSize(item);
  };

  const [status, setStatus] = useState<FieldOption>();
  const handleStatus = (item: FieldOption) => {
    setStatus(item);
  };

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
            <H3 text="Add a cat" />
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
              <Select
                label="Color"
                data={CAT_COLOR_OPTIONS}
                labelField="label"
                onChange={(item) => console.log(item)}
                searchField="label"
                valueField="id"
              />
              <Select
                label="Breed"
                data={CAT_BREED_OPTIONS}
                labelField="label"
                onChange={(item) => console.log(item)}
                searchField="label"
                valueField="id"
              />
            </View>
            <View>
              <RadioGroup
                value={sex}
                onChange={handleSex}
                label="Sex"
                items={SEX_OPTIONS}
              />
            </View>
            <View>
              <RadioGroup
                value={age}
                onChange={handleAge}
                label="Age"
                items={CAT_AGE_OPTIONS}
              />
            </View>
            <View>
              <RadioGroup
                value={size}
                onChange={handleSize}
                label="Size"
                items={CAT_SIZE_OPTIONS}
              />
            </View>
            <View>
              <RadioGroup
                value={status}
                onChange={handleStatus}
                label="Spayed/neutered?"
                items={STATUS_OPTIONS}
              />
            </View>
          </View>
        </View>

        <View style={ruffwind.style(`mt-4 gap-2`, !isIOS && `mb-4`)}>
          <HorizontalDivider color="border-amethystSmoke-600" />
          <Button text="Next" onPress={onSubmit} />
          <Button
            text="Cancel"
            type="transparent"
            size="standard-short"
            onPress={() => navigation.navigate('Manage Pets')}
          />
        </View>
      </FormProvider>
    </ScrollFeatureTemplate>
  );
};
