import { yupResolver } from '@hookform/resolvers/yup';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import {
  CatCarePlan,
  CatCareplanField,
  PageNavigationProps,
} from '@rufferal/types';
import {
  cleanCareplan,
  moderateScaleTW,
  useAutoScroll,
  verticalScaleTW,
} from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Platform, View } from 'react-native';

import {
  Accordian,
  Button,
  FieldHelper,
  HorizontalDivider,
  ProgressBar,
} from '../../../../../atoms';
import { ScrollFeatureTemplate } from '../../../../../templates';
import {
  CAT_SECTIONS,
  generateCatCareplans,
  getDefaultSectionIndices,
} from '../../shared/pet-careplan-options';
import { catCareplanSchema } from '../../shared/pet-profile-forms';
import { SecondaryFormHeader } from '../../shared/secondary-form-header/secondary-form-header';

export const CatCareplan = observer(({ navigation }: PageNavigationProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const handleActiveSections = (indexes: number[]) =>
    setActiveSections(indexes);
  const [accordionDirty, setAccordionDirty] = useState<boolean>(false);
  const handleAccordionDirty = (dirty: boolean) => setAccordionDirty(dirty);
  const { scrollRef, scrollTracker, scrollTo } = useAutoScroll();

  let defaults: CatCarePlan | undefined;

  if (observablePetStore.editingPetId) {
    defaults = observablePetStore.currentEditingPet()?.careplan;
  }

  /* REACT HOOK FORM */
  const form = useForm<CatCarePlan>({
    resolver: yupResolver(catCareplanSchema),
    mode: 'onBlur',
    defaultValues: defaults,
  });
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = form;

  useEffect(() => {
    const firstErrorField = Object.keys(errors)[0] as CatCareplanField;

    if (firstErrorField) {
      scrollTo([`${firstErrorField}.activated`]);
    }
  }, [errors, scrollTo]);

  const harnessSection = watch('harness.activated');
  const feedingSection = watch('feeding.activated');
  const overnightSection = watch('overnight.activated');
  const medicalSection = watch('medical.activated');
  const specialNeedsSection = watch('specialNeeds.activated');
  const additionalNotesSection = watch('additionalNotes.activated');

  useEffect(() => {
    if (harnessSection) {
      setActiveSections([...activeSections, 0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [harnessSection]);
  useEffect(() => {
    if (feedingSection) {
      setActiveSections([...activeSections, 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedingSection]);
  useEffect(() => {
    if (overnightSection) {
      setActiveSections([...activeSections, 2]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overnightSection]);
  useEffect(() => {
    if (medicalSection) {
      setActiveSections([...activeSections, 3]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [medicalSection]);
  useEffect(() => {
    if (specialNeedsSection) {
      setActiveSections([...activeSections, 4]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specialNeedsSection]);
  useEffect(() => {
    if (additionalNotesSection) {
      setActiveSections([...activeSections, 5]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [additionalNotesSection]);
  useEffect(() => {
    if (
      defaults &&
      activeSections.length === 0 &&
      !isDirty &&
      !accordionDirty
    ) {
      console.log('Inside default handling');
      const indexes = getDefaultSectionIndices(CAT_SECTIONS, defaults);
      setActiveSections(indexes);
    }
  }, [accordionDirty, activeSections.length, defaults, isDirty]);

  const onSubmit = handleSubmit(async (data: CatCarePlan) => {
    setLoading(true);
    if (process.env['NODE_ENV'] === 'development') {
      const cleanedData = cleanCareplan(data);
      if (cleanedData) {
        const petId = observablePetStore.editingPetId;
        observablePetStore.updatePet({ id: petId, careplan: cleanedData });
      }
      observablePetStore.setEditing({ id: undefined });
      setLoading(false);
      navigation.navigate('Pets Dashboard');
    } else {
      // Handle form submission
      setError('');

      try {
        console.log('BLARG:TODO - handle backend submission', data);
        navigation.navigate('Pets Dashboard');
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
        forwardText={
          defaults && Object.keys(defaults)?.length > 0 ? 'Update' : 'Complete'
        }
        scrollRef={scrollRef}
      >
        <View style={ruffwind`mt-${moderateScaleTW(24)}`}>
          <ProgressBar step={4} total={4} />
        </View>

        <View style={ruffwind`mt-${moderateScaleTW(24)}`}>
          <SecondaryFormHeader
            hasTag
            header="Add a careplan"
            species="cat"
            subHeader="Turn toggle on to include instructions in this pet’s bookings"
          />
        </View>

        <View
          style={ruffwind`mt-${moderateScaleTW(24)} gap-${moderateScaleTW(8)}`}
        >
          <Accordian
            accordionDirty={accordionDirty}
            activeSections={activeSections}
            scrollTracker={scrollTracker}
            sections={generateCatCareplans(form)}
            setAccordionDirty={handleAccordionDirty}
            setActiveSections={handleActiveSections}
          />
        </View>

        <View
          style={ruffwind.style(
            `gap-${moderateScaleTW(8)}`,
            isIOS ? `mt-${verticalScaleTW(161)}` : `mt-${verticalScaleTW(200)}`,
            activeSections.length > 0 && `mt-${verticalScaleTW(16)}`,
            activeSections.length > 0 && !isIOS && `mb-${verticalScaleTW(16)}`
          )}
        >
          <HorizontalDivider color="border-amethystSmoke-600" />
          {error && <FieldHelper text={error} align={'text-center'} />}
          <Button
            text={
              defaults && Object.keys(defaults)?.length > 0
                ? 'Update'
                : 'Complete'
            }
            onPress={onSubmit}
            loading={loading}
          />
          <Button
            text="Cancel"
            type="transparent"
            size="medium"
            onPress={() => {
              observablePetStore.setEditing({ id: undefined });
              navigation.navigate('Pets Dashboard');
            }}
            loading={loading}
          />
        </View>
      </ScrollFeatureTemplate>
    </FormProvider>
  );
});
