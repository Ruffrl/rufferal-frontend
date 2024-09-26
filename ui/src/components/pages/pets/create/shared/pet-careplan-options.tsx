import { ruffwind } from '@rufferal/tailwind';
import {
  AccordionSection,
  CatCarePlan,
  DogCarePlan,
  FieldOption,
  OtherOption,
} from '@rufferal/types';
import { Controller, UseFormReturn } from 'react-hook-form';
import { Text } from 'react-native';
import { InputArea, RadioGroup, Select } from '../../../../molecules';

/****************** SHARED ******************/
export const OTHER_OPTION: OtherOption = {
  label: 'Other (see Special Instructions Below)',
  component: (
    <>
      <Text>Other (see{` `}</Text>
      <Text style={ruffwind`font-bodySemibold`}>Special Instructions</Text>
      <Text>{` `}Below)</Text>
    </>
  ),
};

export const FEEDING_QUANTITY = [
  '1/8 cup',
  '1/4 cup',
  '1/2 cup',
  '3/4 cup',
  '1 cup',
  '2 cups',
];
export const FEEDING_QUANTITY_OPTIONS: FieldOption[] = [
  {
    id: 'qaedfbm7fz',
    label: '1/8 Cup',
    value: '1/8 cup',
  },
  {
    id: '0n1ox755u2qq',
    label: '1/4 Cup',
    value: '1/4 cup',
  },
  {
    id: 'j405x5dn48k',
    label: '1/2 Cup',
    value: '1/2 cup',
  },
  {
    id: '0ior0lowb3si',
    label: '3/4 Cup',
    value: '3/4 cup',
  },
  {
    id: '7yym7gyauy',
    label: '1 Cup',
    value: '1 cup',
  },
  {
    id: '1kdcfpiddap',
    label: '2 Cups',
    value: '2 cups',
  },
];

export const FEEDING_FREQUENCY = [
  'Once a day',
  '2x per day',
  '3x per day',
  '4x per day',
];
export const FEEDING_FREQUENCY_OPTIONS: FieldOption[] = [
  {
    id: 'ylq129t7jy8',
    label: 'Once A Day',
    value: 'once a day',
  },
  {
    id: 'aohicv93h',
    label: '2x Per Day',
    value: '2x per day',
  },
  {
    id: '1xpbfam2l1l',
    label: '3x Per Day',
    value: '3x per day',
  },
  {
    id: '6esq1q2jc1l',
    label: '4x Per Day',
    value: '4x per day',
  },
];

/****************** CATS ******************/
export const HARNESS = ['yes', 'no'];
export const HARNESS_OPTIONS: FieldOption[] = [
  {
    id: 'jhp8becas9e',
    label: 'Yes',
    value: 'true',
  },
  {
    id: 'cl4801pdvd4',
    label: 'No',
    value: 'false',
  },
];

export const generateCatCareplans = (
  form: UseFormReturn<CatCarePlan>
): AccordionSection[] => {
  const {
    control,
    formState: { errors },
    setValue,
  } = form;

  return [
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
                data={HARNESS_OPTIONS}
                errorMessage={errors.harness?.comfortableHarness?.message}
                label="Does your dog have any accidents in the house?"
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('harness.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                value={value}
              />
            )}
          />
          <Controller
            name="harness.specialInstructions"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputArea
                errorMessage={errors.harness?.specialInstructions?.message}
                label="Special instructions"
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('harness.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                placeholder="Add house training notes here..."
                value={value}
              />
            )}
          />
        </>
      ),
      switch: {
        control,
        fieldName: 'harness.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            console.log('HARNESS conditions');
            setValue('harness.comfortableHarness', null);
            setValue('harness.specialInstructions', null);
          }
        },
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
            render={({ field: { onBlur, onChange, value } }) => (
              <Select
                data={FEEDING_QUANTITY_OPTIONS}
                errorMessage={errors.feeding?.quantity?.message}
                label="Quantity"
                labelField="label"
                onBlur={onBlur}
                onChange={(item) => {
                  setValue('feeding.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(item);
                }}
                other={OTHER_OPTION}
                searchField="label"
                value={value?.id}
                valueField="id"
              />
            )}
          />
          <Controller
            name="feeding.frequency"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <Select
                data={FEEDING_FREQUENCY_OPTIONS}
                errorMessage={errors.feeding?.frequency?.message}
                label="Frequency"
                labelField="label"
                onBlur={onBlur}
                onChange={(item) => {
                  setValue('feeding.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(item);
                }}
                other={OTHER_OPTION}
                searchField="label"
                value={value?.id}
                valueField="id"
              />
            )}
          />
          <Controller
            name="feeding.specialInstructions"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputArea
                errorMessage={errors.feeding?.specialInstructions?.message}
                label="Special instructions"
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('feeding.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                placeholder="Add instructions here..."
                value={value}
              />
            )}
          />
        </>
      ),
      switch: {
        control,
        fieldName: 'feeding.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('feeding.quantity', null);
            setValue('feeding.frequency', null);
            setValue('feeding.specialInstructions', null);
          }
        },
      },
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
              errorMessage={errors.overnight?.specialInstructions?.message}
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('overnight.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'overnight.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('overnight.specialInstructions', null);
          }
        },
      },
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
              errorMessage={errors.medical?.specialInstructions?.message}
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('medical.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'medical.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('medical.specialInstructions', null);
          }
        },
      },
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
              errorMessage={errors.specialNeeds?.specialInstructions?.message}
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('specialNeeds.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'specialNeeds.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('specialNeeds.specialInstructions', null);
          }
        },
      },
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
              errorMessage={
                errors.additionalNotes?.specialInstructions?.message
              }
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('additionalNotes.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'additionalNotes.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('additionalNotes.specialInstructions', null);
          }
        },
      },
    },
  ];
};

/****************** DOGS ******************/
export const HOUSETRAINING = ['yes', 'no'];
export const HOUSETRAINING_OPTIONS: FieldOption[] = [
  {
    id: 'jhp8becas9e',
    label: 'Yes',
    value: 'true',
  },
  {
    id: 'cl4801pdvd4',
    label: 'No',
    value: 'false',
  },
];

export const generateDogCareplans = (
  form: UseFormReturn<DogCarePlan>
): AccordionSection[] => {
  const {
    control,
    formState: { errors },
    setValue,
  } = form;

  return [
    {
      title: 'House Training',
      icon: require('@rufferal/assets/src/icons/dog-walk.png'),
      component: (
        <>
          <Controller
            name="houseTraining.hasAccidents"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <RadioGroup
                data={HOUSETRAINING_OPTIONS}
                errorMessage={errors.houseTraining?.hasAccidents?.message}
                label="Does your dog have any accidents in the house?"
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('houseTraining.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                value={value}
              />
            )}
          />
          <Controller
            name="houseTraining.specialInstructions"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputArea
                errorMessage={
                  errors.houseTraining?.specialInstructions?.message
                }
                label="Special instructions"
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('houseTraining.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                placeholder="Add house training notes here..."
                value={value}
              />
            )}
          />
        </>
      ),
      switch: {
        control,
        fieldName: 'houseTraining.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('houseTraining.hasAccidents', null);
            setValue('houseTraining.specialInstructions', null);
          }
        },
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
            render={({ field: { onBlur, onChange, value } }) => (
              <Select
                data={FEEDING_QUANTITY_OPTIONS}
                errorMessage={errors.feeding?.quantity?.message}
                label="Quantity"
                labelField="label"
                onBlur={onBlur}
                onChange={(item) => {
                  setValue('feeding.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(item);
                }}
                other={OTHER_OPTION}
                searchField="label"
                value={value?.id}
                valueField="id"
              />
            )}
          />
          <Controller
            name="feeding.frequency"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <Select
                data={FEEDING_FREQUENCY_OPTIONS}
                errorMessage={errors.feeding?.frequency?.message}
                label="Frequency"
                labelField="label"
                onBlur={onBlur}
                onChange={(item) => {
                  setValue('feeding.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(item);
                }}
                other={OTHER_OPTION}
                searchField="label"
                value={value?.id}
                valueField="id"
              />
            )}
          />
          <Controller
            name="feeding.specialInstructions"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputArea
                errorMessage={errors.feeding?.specialInstructions?.message}
                label="Special instructions"
                onBlur={onBlur}
                onChange={(text) => {
                  setValue('feeding.activated', true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  onChange(text);
                }}
                placeholder="Add instructions here..."
                value={value}
              />
            )}
          />
        </>
      ),
      switch: {
        control,
        fieldName: 'feeding.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('feeding.quantity', null);
            setValue('feeding.frequency', null);
            setValue('feeding.specialInstructions', null);
          }
        },
      },
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
              errorMessage={errors.overnight?.specialInstructions?.message}
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('overnight.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'overnight.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('overnight.specialInstructions', null);
          }
        },
      },
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
              errorMessage={errors.medical?.specialInstructions?.message}
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('medical.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'medical.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('medical.specialInstructions', null);
          }
        },
      },
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
              errorMessage={errors.specialNeeds?.specialInstructions?.message}
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('specialNeeds.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'specialNeeds.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('specialNeeds.specialInstructions', null);
          }
        },
      },
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
              errorMessage={
                errors.additionalNotes?.specialInstructions?.message
              }
              label="Special instructions"
              onBlur={onBlur}
              onChange={(text) => {
                setValue('additionalNotes.activated', true, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                onChange(text);
              }}
              placeholder="Add instructions here..."
              value={value}
            />
          )}
        />
      ),
      switch: {
        control,
        fieldName: 'additionalNotes.activated',
        handleChange: (value: boolean) => {
          if (!value) {
            setValue('additionalNotes.specialInstructions', null);
          }
        },
      },
    },
  ];
};
