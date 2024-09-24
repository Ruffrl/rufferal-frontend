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

export const catAvatarSchema: yup.ObjectSchema<{ avatar?: string }> =
  yup.object({
    avatar: yup.string(),
  });

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
  harness: yup.object().shape(
    {
      activated: yup.boolean().default(false),
      comfortableHarness: generateOptionSchema()
        .default(undefined)
        .when(['specialInstructions', 'activated'], ([specialInstructions, activated], schema) => {
          if (activated || specialInstructions?.length > 0) {
            return schema.required('All fields in this section are required');
          }
          return schema;
        }),
      specialInstructions: yup
        .string()
        .when(['comfortableHarness', 'activated'], ([comfortableHarness, activated], schema) => {
          if (activated || comfortableHarness?.value?.length > 0) {
            return schema.required('All fields in this section are required');
          }
          return schema;
        }),
    },
    [['comfortableHarness', 'specialInstructions']]
  ),
  feeding: yup.object().shape(
    {
      quantity: generateOptionSchema()
        .default(undefined)
        .when(
          ['frequency', 'specialInstructions'],
          ([frequency, specialInstructions], schema) => {
            if (
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
          ['quantity', 'specialInstructions'],
          ([quantity, specialInstructions], schema) => {
            if (
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
        .when(['quantity', 'frequency'], ([quantity, frequency], schema) => {
          if (quantity?.value?.length > 0 || frequency?.value?.length > 0) {
            return schema.required('All fields in this section are required');
          }
          return schema;
        }),
    },
    [
      ['frequency', 'specialInstructions'],
      ['quantity', 'specialInstructions'],
      ['quantity', 'frequency'],
    ]
  ),
  overnight: yup.object({
    specialInstructions: yup.string(),
  }),
  medical: yup.object({
    specialInstructions: yup.string(),
  }),
  specialNeeds: yup.object({
    specialInstructions: yup.string(),
  }),
  additionalNotes: yup.object({
    specialInstructions: yup.string(),
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

// comfortableHarness: generateOptionSchema().test(
//   'Required',
//   'All fields in this section are required',
//   (_value, context) => {
//     if (context.parent.specialInstructions) {
//       return context.parent.specialInstructions?.length === 0;
//     } else {
//       return true;
//     }
//   }
// ),
// specialInstructions: yup
//   .string()
//   .test(
//     'Required',
//     'All fields in this section are required',
//     (_value, context) => {
//       if (context.parent.comfortableHarness.value) {
//         return context.parent.comfortableHarness.value?.length === 0;
//       } else {
//         return true;
//       }
//     }
//   ),

// .when(
//       'specialInstructions',
//       ([specialInstructions], schema) => {
//         if (specialInstructions?.length > 0) {
//           console.log('CONDITION specialInstructions');
//           return schema.required('BLARG - All fields in this section are required');
//         }
//         return schema;
//       }
// )
// .when(
//   'comfortableHarness',
//   ([comfortableHarness], schema) => {
//     console.log('BLARG comfortableHarness', comfortableHarness);
//     if (comfortableHarness?.value?.length > 0) {
//       console.log('CONDITION comfortableHarness');
//       return schema.required('BLARG - All fields in this section are required');
//     }
//     return schema;
//   }
// );

// // GOT IT!!!!!!!
// harness: yup.object().shape(
//   {

//     comfortableHarness: generateOptionSchema()
//       .default(undefined)
//       .when('specialInstructions', ([specialInstructions], schema) => {
//         if (specialInstructions?.length > 0) {
//           return schema.required('All fields in this section are required');
//         }
//         return schema;
//       }),
//     specialInstructions: yup
//       .string()
//       .when('comfortableHarness', ([comfortableHarness], schema) => {
//         if (comfortableHarness?.value?.length > 0) {
//           return schema.required('All fields in this section are required');
//         }
//         return schema;
//       }),
//   },
//   [['comfortableHarness', 'specialInstructions']]
// ),
