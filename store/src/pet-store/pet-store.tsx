import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateKey } from '@rufferal/utils';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

// This should match FieldOption from `ui/src/components/atoms/types/field-types.tsx`
// BLARG:TODO - importing from @rufferal/ui causes a circular dependency
// Option 1: Join libraries so we have lib/ui and lib/store as the same nx library called "lib"
// Option 2: Create a "types" library all types that can be imported into store, ui, utils or any new library that would use them
// Option 3... https://nx.dev/troubleshooting/resolve-circular-dependencies
type FieldOption = {
  id: string;
  label: string;
  value: string;
};
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

class PetStore {
  pets: Pet[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'PetStore',
      properties: ['pets'],
      storage: AsyncStorage,
    });
  }

  createPet({ id, details }: Pet) {
    const newPet: Pet = {
      id: id || generateKey(),
      details,
      state: 'active',
    };
    this.pets.push(newPet);
  }

  updatePet({ id, ...updates }: Pet) {
    let currentPet: Pet | undefined = this.pets.find((pet) => pet.id === id);
    if (currentPet) {
      // currentPet = { ...updates };
      currentPet = { ...currentPet, ...updates };
    } else {
      console.error('ERROR: Could not update Pet');
    }
  }

  archivePet({ id }: { id: string }) {
    const currentPet = this.pets.find((pet) => pet.id === id);
    if (currentPet) {
      currentPet.state = 'inactive';
    }
  }

  activePets() {
    const active = this.pets.filter((pet) => pet.state === 'active');
    return active ? active : [];
  }
}

export const observablePetStore = new PetStore();
