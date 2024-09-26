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
export type CatPersonalityField = keyof CatPersonality;
export interface DogPersonality extends PetPersonality {
  houseTrained?: boolean;
}
export type DogPersonalityField = keyof DogPersonality;
export type PetCareplan = {
  feeding?: {
    activated: boolean;
    quantity?: FieldOption | null;
    frequency?: FieldOption | null;
    specialInstructions?: string | null;
  };
  overnight?: {
    activated: boolean;
    specialInstructions?: string | null;
  };
  medical?: {
    activated: boolean;
    specialInstructions?: string | null;
  };
  specialNeeds?: {
    activated: boolean;
    specialInstructions?: string | null;
  };
  additionalNotes?: {
    activated: boolean;
    specialInstructions?: string | null;
  };
};
export interface CatCarePlan extends PetCareplan {
  harness?: {
    activated: boolean;
    comfortableHarness?: FieldOption | null;
    specialInstructions?: string | null;
  };
}
export type CatCareplanField = keyof CatCarePlan;
export interface DogCarePlan extends PetCareplan {
  houseTraining?: {
    activated: boolean;
    hasAccidents?: FieldOption | null;
    specialInstructions?: string | null;
  };
}
export type DogCareplanField = keyof DogCarePlan;
