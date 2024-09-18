import { generateKey } from '@rufferal/ui';
import { makeAutoObservable } from 'mobx';

type PetSpecies = 'cat' | 'dog';
type PetStatus = 'active' | 'inactive';

export interface Pet {
  avatar: string;
  breed: string;
  id?: string;
  name: string;
  species: PetSpecies;
  status?: PetStatus;
}

class PetStore {
  pets: Pet[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPet({ id, name, species, breed, avatar }: Pet) {
    const newPet: Pet = {
      avatar,
      breed,
      id: id || generateKey(),
      name,
      species,
      status: 'active',
    };
    this.pets.push(newPet);
  }

  archivePet(petId: string) {
    const currentPet = this.pets.find((pet) => pet.id === petId);
    if (currentPet) {
      currentPet.status = 'inactive';
    }
  }

  activePets() {
    const aPets = this.pets.filter((pet) => pet.status === 'active');
    return aPets ? aPets : [];
  }
}

export const observablePetStore = new PetStore();
