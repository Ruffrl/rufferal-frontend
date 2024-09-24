import { yupResolver } from '@hookform/resolvers/yup';
import { ruffwind } from '@rufferal/tailwind';
import {
  AccordionSection,
  CatCarePlan,
  PageNavigationProps,
} from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  verticalScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';

import {
  Accordian,
  Button,
  FieldHelper,
  H3,
  HorizontalDivider,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { InputArea, RadioGroup, Select } from '../../../../../molecules';
import { ScrollFeatureTemplate } from '../../../../../templates';
import {
  FEEDING_FREQUENCY_OPTIONS,
  FEEDING_QUANTITY_OPTIONS,
  HARNESS_OPTIONS,
  OTHER_OPTION,
} from '../../pet-careplan-options';
import { catCareplanSchema } from '../../pet-profile-forms';

export const CatCareplan = ({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [activeSection, setActiveSection] = useState<number[] | string[]>([]);
  const handleActiveSections = (indexes: number[] | string[]) =>
    setActiveSection(indexes);

  /* REACT HOOK FORM */
  const form = useForm<CatCarePlan>({
    resolver: yupResolver(catCareplanSchema),
    mode: 'onBlur',
    defaultValues: {
      harness: { activated: false, specialInstructions: '' },
    },
  });
  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    formState: {
      errors,
      /*
       * BLARG:TODO: - convert switch behavior to dirtyfield handling
       * - Prevent toggle from being turned ON if fields are not dirty
       * - If toggle is ON and clicked -> reset field (https://react-hook-form.com/docs/useform/resetfield)
       * - If toggle is OFF and dirtyFields -> turn toggle ON
       */
      // dirtyFields: { harness },
    },
  } = form;
  console.log('BLARG errors', errors);

  const onSubmit = handleSubmit(async (data: CatCarePlan) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      console.log('BLARG:TODO - handle store submission', data);
      // 1. Add findPet function to PetStore
      // 2. Add currentPetId variable to PetStore
      // 3. Get the current pet at top of CatCareplan
      // 4. pass appropriate id and ...pet to updatePet
      // observablePetStore.updatePet({ id: '11223', personality: data });
      // navigation.navigate('Manage Pets');
    } else {
      // Handle form submission
      setError('');

      try {
        console.log('BLARG:TODO - handle backend submission', data);
        navigation.navigate('Manage Pets');
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
  });

  /* BEHAVIORS */
  const handleHarnessChange = (value: boolean) => {
    if (!value) {
      resetField('harness.comfortableHarness');
      resetField('harness.specialInstructions');
    }
  };

  /* RENDERS */
  const CAT_CAREPLAN_SECTIONS: AccordionSection[] = [
    {
      title: 'Harness',
      icon: require('@rufferal/assets/src/icons/cat-walk.png'),
      component: (
        <>
          <Controller
            name="harness.comfortableHarness"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <RadioGroup
                value={value}
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('harness.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                errorMessage={
                  errors.harness?.comfortableHarness?.value?.message
                }
                label="Has your cat comfortably walked on a harness before?"
                data={HARNESS_OPTIONS}
              />
            )}
          />
          <Controller
            name="harness.specialInstructions"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputArea
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('harness.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                value={value}
                errorMessage={errors.harness?.specialInstructions?.message}
                label="Special instructions"
                placeholder="Add instructions here..."
              />
            )}
          />
        </>
      ),
      switch: {
        control,
        fieldName: 'harness.activated',
        handleChange: handleHarnessChange,
      },
    },
    {
      title: 'Feeding',
      icon: require('@rufferal/assets/src/icons/food.png'),
      component: (
        <>
          <Controller
            name="feeding.quantity"
            control={control}
            render={({ field: { onBlur, onChange } }) => (
              <Select
                onBlur={onBlur}
                onChange={onChange}
                errorMessage={errors.feeding?.quantity?.value?.message}
                label="Quantity"
                data={FEEDING_QUANTITY_OPTIONS}
                labelField="label"
                searchField="label"
                valueField="id"
                other={OTHER_OPTION}
              />
            )}
          />
          <Controller
            name="feeding.frequency"
            control={control}
            render={({ field: { onBlur, onChange } }) => (
              <Select
                onBlur={onBlur}
                onChange={onChange}
                errorMessage={errors.feeding?.frequency?.value?.message}
                label="Frequency"
                data={FEEDING_FREQUENCY_OPTIONS}
                labelField="label"
                searchField="label"
                valueField="id"
                other={OTHER_OPTION}
              />
            )}
          />
          <Controller
            name="feeding.specialInstructions"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputArea
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                errorMessage={errors.feeding?.specialInstructions?.message}
                label="Special instructions"
                placeholder="Add instructions here..."
              />
            )}
          />
        </>
      ),
    },
    {
      title: 'Overnight',
      icon: require('@rufferal/assets/src/icons/moon.png'),
      component: (
        <Controller
          name="overnight.specialInstructions"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <InputArea
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              errorMessage={errors.overnight?.specialInstructions?.message}
              label="Special instructions"
              placeholder="Add instructions here..."
            />
          )}
        />
      ),
    },
    {
      title: 'Medical',
      icon: require('@rufferal/assets/src/icons/pills.png'),
      component: (
        <Controller
          name="medical.specialInstructions"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <InputArea
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              errorMessage={errors.medical?.specialInstructions?.message}
              label="Special instructions"
              placeholder="Add instructions here..."
            />
          )}
        />
      ),
    },
    {
      title: 'Special needs',
      icon: require('@rufferal/assets/src/icons/paw-print.png'),
      component: (
        <Controller
          name="specialNeeds.specialInstructions"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <InputArea
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              errorMessage={errors.specialNeeds?.specialInstructions?.message}
              label="Special instructions"
              placeholder="Add instructions here..."
            />
          )}
        />
      ),
    },
    {
      title: 'Additional notes',
      icon: require('@rufferal/assets/src/icons/fish.png'),
      component: (
        <Controller
          name="additionalNotes.specialInstructions"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <InputArea
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              errorMessage={
                errors.additionalNotes?.specialInstructions?.message
              }
              label="Special instructions"
              placeholder="Add instructions here..."
            />
          )}
        />
      ),
    },
  ];

  return (
    <ScrollFeatureTemplate
      backNavigation={() => navigation.navigate('Cat Personality')}
      skipNavigation={() => {
        console.log('BLARG: TODO: Handle form submission');
        navigation.navigate('Manage Pets');
      }}
      // BLARG - handle change from "Skip" to "Complete" (optional text)
      // skipText="Complete"
    >
      <FormProvider {...form}>
        <View style={ruffwind`mt-6`}>
          <ProgressBar step={4} total={4} />
        </View>

        <View style={ruffwind`mt-6 gap-2`}>
          <Tag
            Icon={() => (
              <Image
                style={ruffwind.style(
                  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
                  'items-center justify-center'
                )}
                source={require('@rufferal/assets/src/icons/cat.png')}
              />
            )}
            text="Gavin"
          />
          <H3 text="Add a careplan" />
          <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
            Turn toggle on to include instructions in this pet’s bookings
          </Text>
        </View>
        <View style={ruffwind`mt-6 gap-2`}>
          <Accordian
            activeSection={activeSection}
            setActiveSections={(indexes) => handleActiveSections(indexes)}
            sections={CAT_CAREPLAN_SECTIONS}
          />
        </View>

        <View
          style={ruffwind.style(
            `gap-2 bg-pink-500`,
            isIOS ? `mt-${verticalScaleTW(161)}` : `mt-${verticalScaleTW(180)}`,
            activeSection.length > 0 && `mt-${verticalScaleTW(16)}`,
            activeSection.length > 0 && !isIOS && `mb-${verticalScaleTW(16)}`
          )}
        >
          <HorizontalDivider color="border-amethystSmoke-600" />
          {error && <FieldHelper text={error} align={'text-center'} />}
          <Button text="Complete" onPress={onSubmit} loading={loading} />
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
