import {
  CatCarePlan,
  CatPersonality,
  DogCarePlan,
  DogPersonality,
  PetDetails,
  PetSpecies,
} from '@rufferal/types';
import { generateOptionSchema } from '@rufferal/utils';
import * as yup from 'yup';

export const petDetailsSchema: (
  species: PetSpecies
) => yup.ObjectSchema<PetDetails> = (species: PetSpecies) =>
  yup
    .object({
      species: yup
        .string()
        .oneOf(['cat', 'dog'])
        .required(`Missing species: ${species} type declaration`),
      name: yup.string().required(`Please provide a name for your ${species}`),
      color: generateOptionSchema(`Please provide your ${species}'s color`),
      breed: generateOptionSchema(`Please provide your ${species}'s breed`),
      sex: generateOptionSchema(`Please provide your ${species}'s sex`),
      age: generateOptionSchema(`Please provide your ${species}'s age`),
      size: generateOptionSchema(`Please provide your ${species}'s size`),
      status: generateOptionSchema(`Please provide your ${species}'s status`),
    })
    .required();

export const catPersonalitySchema: yup.ObjectSchema<CatPersonality> =
  yup.object({
    goodKids: yup.boolean(),
    goodOtherSpecies: yup.boolean(),
    goodSameSpecies: yup.boolean(),
    temperment: yup.number().oneOf([1, 2, 3, 4, 5]),
    energy: yup.number().oneOf([1, 2, 3, 4, 5]),
    autonomy: yup.number().oneOf([1, 2, 3, 4, 5]),
    motivation: yup.number().oneOf([1, 2, 3, 4, 5]),
    declawed: yup.boolean(),
    requiresMedication: yup.boolean(),
    seperationAnxiety: yup.boolean(),
    specialNeeds: yup.boolean(),
  });

export const dogPersonalitySchema: yup.ObjectSchema<DogPersonality> =
  yup.object({
    goodKids: yup.boolean(),
    goodOtherSpecies: yup.boolean(),
    goodSameSpecies: yup.boolean(),
    temperment: yup.number().oneOf([1, 2, 3, 4, 5]),
    energy: yup.number().oneOf([1, 2, 3, 4, 5]),
    autonomy: yup.number().oneOf([1, 2, 3, 4, 5]),
    motivation: yup.number().oneOf([1, 2, 3, 4, 5]),
    houseTrained: yup.boolean(),
    requiresMedication: yup.boolean(),
    seperationAnxiety: yup.boolean(),
    specialNeeds: yup.boolean(),
  });

export const catCareplanSchema: yup.ObjectSchema<CatCarePlan> = yup.object({
  harness: yup.object({
    comfortableHarness: generateOptionSchema(
      'All fields in this section are required'
    ),
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  feeding: yup.object({
    quantity: generateOptionSchema('All fields in this section are required'),
    frequency: generateOptionSchema('All fields in this section are required'),
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  overnight: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  medical: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  specialNeeds: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  additionalNotes: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
});

export const dogCareplanSchema: yup.ObjectSchema<DogCarePlan> = yup.object({
  houseTraining: yup.object({
    hasAccidents: generateOptionSchema(
      'All fields in this section are required'
    ),
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  feeding: yup.object({
    quantity: generateOptionSchema('All fields in this section are required'),
    frequency: generateOptionSchema('All fields in this section are required'),
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  overnight: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  medical: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  specialNeeds: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
  additionalNotes: yup.object({
    specialInstructions: yup
      .string()
      .required('All fields in this section are required'),
  }),
});
