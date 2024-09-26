import { PetCareplan } from '@rufferal/types';

type NestedObject = {
  [key: string]: unknown;
};

export const transformFormObject = (obj: NestedObject) => {
  // Check if the input is an object
  if (obj && typeof obj === 'object') {
    // Iterate over each key in the object
    for (const key in obj) {
      // If the value is an empty string, set it to null
      if (obj[key] === '') {
        obj[key] = null;
      }
      // If the value is an object, recursively transform it
      else if (typeof obj[key] === 'object') {
        transformFormObject(obj[key] as NestedObject);
      }
      // If the key is "value" and the value is "true", convert it to true
      if (key === 'value') {
        if (obj[key] === 'true') {
          obj[key] = true;
        } else if (obj[key] === 'false') {
          obj[key] = false;
        }
      }
    }
  }
  return obj;
};

type CareplanKeys = keyof PetCareplan;

export const cleanCareplan = (
  carePlan: PetCareplan
): PetCareplan | undefined => {
  for (const key in carePlan) {
    if (carePlan[key as CareplanKeys]?.activated === false) {
      delete carePlan[key as CareplanKeys];
    }
  }

  return Object.keys(carePlan).length === 0 ? undefined : carePlan;
};
