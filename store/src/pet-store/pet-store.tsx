import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pet } from '@rufferal/types';
import { generateKey } from '@rufferal/utils';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class PetStore {
  pets: Pet[] = [];
  editingPetId?: string;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'PetStore',
      properties: ['pets'],
      storage: AsyncStorage,
    });
  }

  createPet({ id, ...createParams }: Pet) {
    if (process.env['NODE_ENV'] === 'development') {
      const newId = id || generateKey();
      const newPet: Pet = {
        id: newId,
        state: 'active',
        ...createParams,
      };
      this.setEditing({ id: newId });
      this.pets.push(newPet);
    }
  }

  findPet(id?: string) {
    if (id) {
      return this.pets.find((pet) => pet.id === id);
    } else {
      return undefined;
    }
  }

  setEditing({ id }: { id?: string }) {
    this.editingPetId = id;
  }

  currentEditingPet() {
    return this.findPet(this.editingPetId);
  }

  updatePet({ id, ...updateParams }: Pet) {
    // Find the index of the pet with the specified id
    const index = this.pets.findIndex((pet) => pet.id === id);
    // If the pet is found,
    if (index !== -1) {
      // remove it from the array and return the pet for updates
      let [currentPet] = this.pets.splice(index, 1);
      // modify values
      currentPet = { ...currentPet, ...updateParams };
      // add back to array
      this.pets.push(currentPet);
    } else {
      console.error('ERROR: Could not update Pet');
    }
  }

  archivePet({ id }: { id: string }) {
    const currentPet = this.findPet(id);
    if (currentPet) {
      currentPet.state = 'inactive';
    }
  }

  activePets() {
    const active = this.pets.filter((pet) => pet.state === 'active');
    return active ? active : [];
  }

  async resetStorage() {
    console.log('Resetting PetStore');
    try {
      await AsyncStorage.removeItem('PetStore');
    } catch (e) {
      console.log('ASYNC ERROR:', e);
    }
    console.log('Pet Store reset | pets:', this.pets);
  }
}

export const observablePetStore = new PetStore();
