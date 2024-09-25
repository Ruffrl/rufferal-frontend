import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  verticalScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, Text, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  DogPersonality as DogPersonalityForm,
  PageNavigationProps,
} from '@rufferal/types';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { observablePetStore } from '@rufferal/store';
import {
  Button,
  FieldHelper,
  H3,
  HorizontalDivider,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { CheckToggle, InputSlider } from '../../../../../molecules';
import { ScrollFeatureTemplate } from '../../../../../templates';
import { BehaviorLabel } from '../../shared/behavior-label/behavior-label';
import { dogPersonalitySchema } from '../../shared/pet-profile-forms';

export const DogPersonality = ({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  /* REACT HOOK FORM */
  const form = useForm<DogPersonalityForm>({
    resolver: yupResolver(dogPersonalitySchema),
    mode: 'onBlur',
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(async (data: DogPersonalityForm) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      const petId = observablePetStore.editingPetId;
      observablePetStore.updatePet({ id: petId, personality: data });
      navigation.navigate('Dog Careplan');
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

  return (
    <ScrollFeatureTemplate
      backNavigation={() => navigation.navigate('Dog Avatar')}
      forwardNavigation={() => navigation.navigate('Dog Careplan')}
      forwardText="Skip"
    >
      <FormProvider {...form}>
        <View style={ruffwind`mt-6`}>
          <ProgressBar step={3} total={4} />
        </View>

        <View style={ruffwind`mt-6 gap-2`}>
          <Tag
            Icon={() => (
              <Image
                style={ruffwind.style(
                  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
                  'items-center justify-center'
                )}
                source={require('@rufferal/assets/src/icons/dog.png')}
              />
            )}
            text="Gavin"
          />
          <H3 text="Behavior and personality" />
          <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
            Help pet caretakers understand your dog’s needs and unique traits
          </Text>
        </View>

        <View style={ruffwind`mt-5 gap-4`}>
          <View style={ruffwind`gap-2`}>
            <BehaviorLabel label="Good with" multiple />
            <Controller
              name="goodKids"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Kids"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.goodKids?.message}
                />
              )}
            />
            <Controller
              name="goodOtherSpecies"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Dogs"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.goodOtherSpecies?.message}
                />
              )}
            />
            <Controller
              name="goodSameSpecies"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Other dogs"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.goodSameSpecies?.message}
                />
              )}
            />
          </View>

          <HorizontalDivider color="border-saltBox-200" />

          <View>
            <BehaviorLabel label="Personality" />
            <View style={ruffwind`mt-1 gap-3`}>
              <Controller
                name="temperment"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputSlider
                    sliderLabels={['shy', 'social']}
                    onChange={onChange}
                    value={value}
                    errorMessage={errors.temperment?.message}
                  />
                )}
              />
              <Controller
                name="energy"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputSlider
                    sliderLabels={['relaxed', 'active']}
                    onChange={onChange}
                    value={value}
                    errorMessage={errors.energy?.message}
                  />
                )}
              />
              <Controller
                name="autonomy"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputSlider
                    sliderLabels={['dependent', 'independent']}
                    onChange={onChange}
                    value={value}
                    errorMessage={errors.autonomy?.message}
                  />
                )}
              />
              <Controller
                name="motivation"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputSlider
                    sliderLabels={['food motivated', 'praise motivated']}
                    onChange={onChange}
                    value={value}
                    errorMessage={errors.motivation?.message}
                  />
                )}
              />
            </View>
          </View>

          <HorizontalDivider color="border-saltBox-200" />

          <View style={ruffwind`gap-2`}>
            <BehaviorLabel label="Care & behavior" multiple />
            <Controller
              name="houseTrained"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Declawed"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.houseTrained?.message}
                />
              )}
            />
            <Controller
              name="requiresMedication"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Requires medication"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.requiresMedication?.message}
                />
              )}
            />
            <Controller
              name="seperationAnxiety"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Seperation anxiety"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.seperationAnxiety?.message}
                />
              )}
            />
            <Controller
              name="specialNeeds"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <CheckToggle
                  label="Special needs"
                  onBlur={onBlur}
                  onChange={onChange}
                  switchOn={!!value}
                  errorMessage={errors.specialNeeds?.message}
                />
              )}
            />
          </View>
        </View>

        <View
          style={ruffwind.style(
            `gap-2 mt-${verticalScaleTW(37)}`,
            !isIOS && `mb-${verticalScaleTW(16)}`
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
};
