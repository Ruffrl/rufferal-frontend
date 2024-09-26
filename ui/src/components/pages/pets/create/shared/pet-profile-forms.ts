import {
  CatCarePlan,
  CatPersonality,
  DogCarePlan,
  DogPersonality,
  PetAvatar,
  PetCareplan,
  PetDetails,
  PetPersonality,
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
      name: yup
        .string()
        .required(`Please provide a name for your ${species}`)
        .max(50, 'Name must be under 50 characters'),
      color: generateOptionSchema(`Please provide your ${species}'s color`),
      breed: generateOptionSchema(`Please provide your ${species}'s breed`),
      sex: generateOptionSchema(`Please provide your ${species}'s sex`),
      age: generateOptionSchema(`Please provide your ${species}'s age`),
      size: generateOptionSchema(`Please provide your ${species}'s size`),
      status: generateOptionSchema(`Please provide your ${species}'s status`),
    })
    .required();

export const petAvatarSchema: yup.ObjectSchema<PetAvatar> = yup.object({
  uri: yup.string(),
});

const petPersonalitySchema: yup.ObjectSchema<PetPersonality> = yup.object({
  goodKids: yup.boolean(),
  goodOtherSpecies: yup.boolean(),
  goodSameSpecies: yup.boolean(),
  temperment: yup.number().oneOf([1, 2, 3, 4, 5]).default(3),
  energy: yup.number().oneOf([1, 2, 3, 4, 5]).default(3),
  autonomy: yup.number().oneOf([1, 2, 3, 4, 5]).default(3),
  motivation: yup.number().oneOf([1, 2, 3, 4, 5]).default(3),
  requiresMedication: yup.boolean(),
  seperationAnxiety: yup.boolean(),
  specialNeeds: yup.boolean(),
});

const cPersonality = yup.object({
  declawed: yup.boolean(),
});
export const catPersonalitySchema: yup.ObjectSchema<CatPersonality> =
  petPersonalitySchema.concat(cPersonality);

const dPersonality = yup.object({
  houseTrained: yup.boolean(),
});
export const dogPersonalitySchema: yup.ObjectSchema<DogPersonality> =
  petPersonalitySchema.concat(dPersonality);

const petCareplanSchema: yup.ObjectSchema<PetCareplan> = yup.object({
  feeding: yup.object().shape(
    {
      activated: yup.boolean().default(false),
      quantity: generateOptionSchema()
        .default(undefined)
        .when(
          ['frequency', 'specialInstructions', 'activated'],
          ([frequency, specialInstructions, activated], schema) => {
            if (
              activated ||
              frequency?.value?.length > 0 ||
              specialInstructions?.length > 0
            ) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
      frequency: generateOptionSchema()
        .default(undefined)
        .when(
          ['quantity', 'specialInstructions', 'activated'],
          ([quantity, specialInstructions, activated], schema) => {
            if (
              activated ||
              quantity?.value?.length > 0 ||
              specialInstructions?.length > 0
            ) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
      specialInstructions: yup
        .string()
        .when(
          ['quantity', 'frequency', 'activated'],
          ([quantity, frequency, activated], schema) => {
            if (
              activated ||
              quantity?.value?.length > 0 ||
              frequency?.value?.length > 0
            ) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
    },
    [
      ['frequency', 'specialInstructions'],
      ['quantity', 'specialInstructions'],
      ['quantity', 'frequency'],
    ]
  ),
  overnight: yup.object({
    activated: yup.boolean().default(false),
    specialInstructions: yup
      .string()
      .when('activated', ([activated], schema) => {
        if (activated) {
          return schema.required('All fields in this section are required');
        }
        return schema;
      }),
  }),
  medical: yup.object({
    activated: yup.boolean().default(false),
    specialInstructions: yup
      .string()
      .when('activated', ([activated], schema) => {
        if (activated) {
          return schema.required('All fields in this section are required');
        }
        return schema;
      }),
  }),
  specialNeeds: yup.object({
    activated: yup.boolean().default(false),
    specialInstructions: yup
      .string()
      .when('activated', ([activated], schema) => {
        if (activated) {
          return schema.required('All fields in this section are required');
        }
        return schema;
      }),
  }),
  additionalNotes: yup.object({
    activated: yup.boolean().default(false),
    specialInstructions: yup
      .string()
      .when('activated', ([activated], schema) => {
        if (activated) {
          return schema.required('All fields in this section are required');
        }
        return schema;
      }),
  }),
});

const cCareplan = yup.object({
  harness: yup.object().shape(
    {
      activated: yup.boolean().default(false),
      comfortableHarness: generateOptionSchema()
        .default(undefined)
        .when(
          ['specialInstructions', 'activated'],
          ([specialInstructions, activated], schema) => {
            if (activated || specialInstructions?.length > 0) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
      specialInstructions: yup
        .string()
        .when(
          ['comfortableHarness', 'activated'],
          ([comfortableHarness, activated], schema) => {
            if (activated || comfortableHarness?.value?.length > 0) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
    },
    [['comfortableHarness', 'specialInstructions']]
  ),
});
export const catCareplanSchema: yup.ObjectSchema<CatCarePlan> =
  petCareplanSchema.concat(cCareplan);

const dCareplan = yup.object({
  houseTraining: yup.object().shape(
    {
      activated: yup.boolean().default(false),
      hasAccidents: generateOptionSchema()
        .default(undefined)
        .when(
          ['specialInstructions', 'activated'],
          ([specialInstructions, activated], schema) => {
            if (activated || specialInstructions?.length > 0) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
      specialInstructions: yup
        .string()
        .when(
          ['hasAccidents', 'activated'],
          ([hasAccidents, activated], schema) => {
            if (activated || hasAccidents?.value?.length > 0) {
              return schema.required('All fields in this section are required');
            }
            return schema;
          }
        ),
    },
    [['hasAccidents', 'specialInstructions']]
  ),
});
export const dogCareplanSchema: yup.ObjectSchema<DogCarePlan> =
  petCareplanSchema.concat(dCareplan);
