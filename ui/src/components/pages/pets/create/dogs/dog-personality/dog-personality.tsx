import { yupResolver } from '@hookform/resolvers/yup';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import {
  DogPersonalityField,
  DogPersonality as DogPersonalityForm,
  PageNavigationProps,
} from '@rufferal/types';
import {
  moderateScaleTW,
  useAutoScroll,
  verticalScaleTW,
} from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, View } from 'react-native';

import {
  Button,
  FieldHelper,
  HorizontalDivider,
  ProgressBar,
} from '../../../../../atoms';
import { CheckToggle, InputSlider } from '../../../../../molecules';
import { ScrollFeatureTemplate } from '../../../../../templates';
import { BehaviorLabel } from '../../shared/behavior-label/behavior-label';
import { dogPersonalitySchema } from '../../shared/pet-profile-forms';
import { SecondaryFormHeader } from '../../shared/secondary-form-header/secondary-form-header';

export const DogPersonality = observer(
  ({ navigation }: PageNavigationProps) => {
    /* STATE */
    const isIOS = Platform.OS === 'ios';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const { scrollRef, scrollTracker, scrollTo } = useAutoScroll();

    let defaults: DogPersonalityForm | undefined;

    if (observablePetStore.editingPetId) {
      defaults = observablePetStore.currentEditingPet()?.personality;
    }

    /* REACT HOOK FORM */
    const form = useForm<DogPersonalityForm>({
      resolver: yupResolver(dogPersonalitySchema),
      mode: 'onBlur',
      defaultValues: defaults,
    });
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = form;

    useEffect(() => {
      const firstErrorField = Object.keys(errors)[0] as DogPersonalityField;

      if (firstErrorField) {
        scrollTo([firstErrorField]);
      }
    }, [errors, scrollTo]);

    const onSubmit = handleSubmit(async (data: DogPersonalityForm) => {
      setLoading(true);
      if (process.env['NODE_ENV'] === 'development') {
        const petId = observablePetStore.editingPetId;
        observablePetStore.updatePet({ id: petId, personality: data });
        setLoading(false);
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
        scrollRef={scrollRef}
      >
        <FormProvider {...form}>
          <View style={ruffwind`mt-${moderateScaleTW(24)}`}>
            <ProgressBar step={3} total={4} />
          </View>

          <View style={ruffwind`mt-${moderateScaleTW(24)}`}>
            <SecondaryFormHeader
              hasTag
              header="Behavior and personality"
              species="dog"
              subHeader="Help pet caretakers understand your dog’s needs and unique traits"
            />
          </View>

          <View
            style={ruffwind`mt-${moderateScaleTW(20)} gap-${moderateScaleTW(
              16
            )}`}
          >
            <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
              <BehaviorLabel label="Good with" multiple />
              {scrollTracker(
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
                />,
                'goodKids'
              )}
              {scrollTracker(
                <Controller
                  name="goodOtherSpecies"
                  control={control}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <CheckToggle
                      label="Cats"
                      onBlur={onBlur}
                      onChange={onChange}
                      switchOn={!!value}
                      errorMessage={errors.goodOtherSpecies?.message}
                    />
                  )}
                />,
                'goodOtherSpecies'
              )}
              {scrollTracker(
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
                />,
                'goodSameSpecies'
              )}
            </View>

            <HorizontalDivider color="border-saltBox-200" />

            <View>
              <BehaviorLabel label="Personality" />
              <View
                style={ruffwind`
                mt-${moderateScaleTW(4)}
                gap-${moderateScaleTW(12)}
              `}
              >
                {scrollTracker(
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
                  />,
                  'temperment'
                )}
                {scrollTracker(
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
                  />,
                  'energy'
                )}
                {scrollTracker(
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
                  />,
                  'autonomy'
                )}
                {scrollTracker(
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
                  />,
                  'motivation'
                )}
              </View>
            </View>

            <HorizontalDivider color="border-saltBox-200" />

            <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
              <BehaviorLabel label="Care & behavior" multiple />
              {scrollTracker(
                <Controller
                  name="houseTrained"
                  control={control}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <CheckToggle
                      label="House trained"
                      onBlur={onBlur}
                      onChange={onChange}
                      switchOn={!!value}
                      errorMessage={errors.houseTrained?.message}
                    />
                  )}
                />,
                'houseTrained'
              )}
              {scrollTracker(
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
                />,
                'requiresMedication'
              )}
              {scrollTracker(
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
                />,
                'seperationAnxiety'
              )}
              {scrollTracker(
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
                />,
                'specialNeeds'
              )}
            </View>
          </View>

          <View
            style={ruffwind.style(
              `gap-${moderateScaleTW(8)} mt-${verticalScaleTW(37)}`,
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
  }
);
