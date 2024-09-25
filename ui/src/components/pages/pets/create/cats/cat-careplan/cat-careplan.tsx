import { yupResolver } from '@hookform/resolvers/yup';
import { ruffwind } from '@rufferal/tailwind';
import { CatCarePlan, PageNavigationProps } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  verticalScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Platform, Text, View } from 'react-native';

import { observablePetStore } from '@rufferal/store';
import {
  Accordian,
  Button,
  FieldHelper,
  H3,
  HorizontalDivider,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { ScrollFeatureTemplate } from '../../../../../templates';
import { generateCatCareplans } from '../../pet-careplan-options';
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
      feeding: { activated: false, specialInstructions: '' },
      overnight: { activated: false, specialInstructions: '' },
      medical: { activated: false, specialInstructions: '' },
      specialNeeds: { activated: false, specialInstructions: '' },
      additionalNotes: { activated: false, specialInstructions: '' },
    },
  });
  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data: CatCarePlan) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      const petId = observablePetStore.editingPetId;
      observablePetStore.updatePet({ id: petId, careplan: data });
      navigation.navigate('Manage Pets');
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
    <FormProvider {...form}>
      <ScrollFeatureTemplate
        backNavigation={() => navigation.navigate('Cat Personality')}
        forwardNavigation={onSubmit}
        forwardText="Complete"
      >
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
            sections={generateCatCareplans(form)}
          />
        </View>

        <View
          style={ruffwind.style(
            `gap-2`,
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
      </ScrollFeatureTemplate>
    </FormProvider>
  );
};
