import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pet } from '@rufferal/types';
import { generateKey } from '@rufferal/utils';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

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
