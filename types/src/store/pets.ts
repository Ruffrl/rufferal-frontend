import { FieldOption } from '..';

export type PersonalityRange = 1 | 2 | 3 | 4 | 5 | undefined;

export type PetSpecies = 'cat' | 'dog';
export type PetState = 'active' | 'inactive';
export type PetDetails = {
  species: PetSpecies;
  name: string;
  color: FieldOption;
  breed: FieldOption;
  sex: FieldOption;
  age: FieldOption;
  size: FieldOption;
  status: FieldOption;
};
export type PetPersonality = {
  goodKids: boolean;
  goodOtherSpecies: boolean;
  goodSameSpecies: boolean;
  temperment: PersonalityRange; // shy...social
  energy: PersonalityRange; // relaxed...energy
  autonomy: PersonalityRange; // dependent...independent
  motivation: PersonalityRange; // food motivated...praise motivated
  requiresMedication: boolean;
  seperationAnxiety: boolean;
  specialNeeds: boolean;
};
export interface CatPersonality extends PetPersonality {
  declawed: boolean;
}
export interface DogPersonality extends PetPersonality {
  houseTrained: boolean;
}
export type PetCareplan = {
  feeding: {
    quantity: string;
    frequency: string;
    specialInstructions: string;
  };
  overnight: {
    specialInstructions: string;
  };
  medical: {
    specialInstructions: string;
  };
  specialNeeds: {
    specialInstructions: string;
  };
  additionalNotes: {
    specialInstructions: string;
  };
};
export interface CatCareplan extends PetCareplan {
  harness: {
    comfortableHarness: boolean;
    specialInstructions: string;
  };
}
export interface DogCareplan extends PetCareplan {
  houseTraining: {
    hasAccidents: boolean;
    specialInstructions: string;
  };
}

export interface Pet {
  id?: string;
  details: PetDetails;
  avatar?: string;
  personality?: PetPersonality;
  careplan?: PetCareplan;
  state?: PetState;
}
