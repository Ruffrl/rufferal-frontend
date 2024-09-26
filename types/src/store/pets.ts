import { FieldOption } from '..';

export type PersonalityRange = number | undefined;

export interface Pet {
  id?: string;
  details?: PetDetails;
  avatar?: PetAvatar;
  personality?: PetPersonality;
  careplan?: PetCareplan;
  state?: PetState;
}

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
export type PetDetailField = keyof PetDetails;
export type PetAvatar = {
  uri?: string;
};
export type PetPersonality = {
  goodKids?: boolean;
  goodOtherSpecies?: boolean;
  goodSameSpecies?: boolean;
  temperment?: PersonalityRange; // shy...social
  energy?: PersonalityRange; // relaxed...energy
  autonomy?: PersonalityRange; // dependent...independent
  motivation?: PersonalityRange; // food motivated...praise motivated
  requiresMedication?: boolean;
  seperationAnxiety?: boolean;
  specialNeeds?: boolean;
};
export interface CatPersonality extends PetPersonality {
  declawed?: boolean;
}
export interface DogPersonality extends PetPersonality {
  houseTrained?: boolean;
}
export type PetCareplan = {
  feeding?: {
    activated: boolean;
    quantity?: FieldOption;
    frequency?: FieldOption;
    specialInstructions?: string;
  };
  overnight?: {
    activated: boolean;
    specialInstructions?: string;
  };
  medical?: {
    activated: boolean;
    specialInstructions?: string;
  };
  specialNeeds?: {
    activated: boolean;
    specialInstructions?: string;
  };
  additionalNotes?: {
    activated: boolean;
    specialInstructions?: string;
  };
};
export interface CatCarePlan extends PetCareplan {
  harness?: {
    activated: boolean;
    comfortableHarness?: FieldOption;
    specialInstructions?: string;
  };
}
export interface DogCarePlan extends PetCareplan {
  houseTraining?: {
    activated: boolean;
    hasAccidents?: FieldOption;
    specialInstructions?: string;
  };
}
