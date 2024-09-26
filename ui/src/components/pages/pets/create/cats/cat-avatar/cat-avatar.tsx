import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps, PetAvatar } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, Text, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import {
  Button,
  FieldHelper,
  H3,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { InputPhoto } from '../../../../../molecules';
import { OverrideSafeFeatureTemplate } from '../../../../../templates';
import { petAvatarSchema } from '../../shared/pet-profile-forms';

export const CatAvatar = ({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  /* REACT HOOK FORM */
  const form = useForm<PetAvatar>({
    resolver: yupResolver(petAvatarSchema),
    mode: 'onBlur',
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(async (data: PetAvatar) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      console.log('data', data);
      // const petId = observablePetStore.editingPetId;
      // observablePetStore.updatePet({ id: petId, avatar: data });
      // navigation.navigate('Cat Personality');
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
      backNavigation={() => navigation.navigate('Cat Details')}
      forwardNavigation={() => navigation.navigate('Cat Personality')}
      forwardText="Skip"
    >
      <FormProvider {...form}>
        <BottomSheetModalProvider>
          <View style={ruffwind`flex-1 justify-between`}>
            <View style={ruffwind`gap-6`}>
              <View style={ruffwind`mt-6`}>
                <ProgressBar step={2} total={4} />
              </View>

              <View style={ruffwind`gap-2`}>
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
                <H3 text="Upload a profile photo" />
                <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
                  This helps identify your cat to Rufferal pet caretakers
                </Text>
              </View>

              <View style={ruffwind``}>
                <Controller
                  name="uri"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputPhoto
                      cameraNavPath="Cat Avatar"
                      onChange={onChange}
                      uri={value}
                      errorMessage={errors.uri?.message}
                    />
                  )}
                />
              </View>
            </View>

            <View style={ruffwind.style(`gap-2`, !isIOS && `mb-4`)}>
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
          </View>
        </BottomSheetModalProvider>
      </FormProvider>
    </OverrideSafeFeatureTemplate>
  );
};
