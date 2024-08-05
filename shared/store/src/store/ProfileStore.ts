import { createContext } from 'react';

type UserTypes = 'OWNER' | 'CARETAKER' | 'OWNER_AND_CARETAKER';

class ProfileStore {
  forename: string | undefined;
  surname: string | undefined;
  avatar: string | undefined;
  species: UserTypes | undefined;
}

export const ProfileStoreContext = createContext(new ProfileStore());
