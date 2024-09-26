import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps, PetAvatar } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Platform, View } from 'react-native';

import { Button, FieldHelper, ProgressBar } from '../../../../../atoms';
import { InputPhoto } from '../../../../../molecules';
import { OverrideSafeFeatureTemplate } from '../../../../../templates';
import { petAvatarSchema } from '../../shared/pet-profile-forms';
import { SecondaryFormHeader } from '../../shared/secondary-form-header/secondary-form-header';

export const DogAvatar = observer(({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  let defaults: PetAvatar | undefined;

  if (observablePetStore.editingPetId) {
    defaults = observablePetStore.currentEditingPet()?.avatar;
  }

  /* REACT HOOK FORM */
  const form = useForm<PetAvatar>({
    resolver: yupResolver(petAvatarSchema),
    mode: 'onBlur',
    defaultValues: defaults
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(async (data: PetAvatar) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      const petId = observablePetStore.editingPetId;
      observablePetStore.updatePet({ id: petId, avatar: data });
      setLoading(false);
      navigation.navigate('Dog Personality');
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
    <OverrideSafeFeatureTemplate
      backNavigation={() => navigation.navigate('Dog Details')}
      forwardNavigation={() => navigation.navigate('Dog Personality')}
      forwardText="Skip"
    >
      <FormProvider {...form}>
        <BottomSheetModalProvider>
          <View style={ruffwind`flex-1 justify-between`}>
            <View style={ruffwind`gap-${moderateScaleTW(24)}`}>
              <View style={ruffwind`mt-${moderateScaleTW(24)}`}>
                <ProgressBar step={2} total={4} />
              </View>

              <SecondaryFormHeader
                hasTag
                header="Upload a profile photo"
                species="dog"
                subHeader="This helps identify your dog to Rufferal pet caretakers"
              />

              <View>
                <Controller
                  name="uri"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputPhoto
                      onChange={onChange}
                      uri={value}
                      errorMessage={errors.uri?.message}
                    />
                  )}
                />
              </View>
            </View>

            <View
              style={ruffwind.style(
                `gap-${moderateScaleTW(8)}`,
                !isIOS && `mb-${moderateScaleTW(16)}`
              )}
            >
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
          </View>
        </BottomSheetModalProvider>
      </FormProvider>
    </OverrideSafeFeatureTemplate>
  );
});
