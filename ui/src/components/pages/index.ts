/* [PAGES] ATOMIC DESIGN
 *
 * Pages bring templates to life with actual content
 *
 * Pages are specific instances of templates filled with real content
 * They represent the final product that users interact with
 * Pages include:
 *   Homepage: Filled with actual images, text, and calls to action
 *   Product Page: Populated with product details, reviews, and purchase options
 *   Article Page: Complete with actual articles, images, and related links
 *
 */
export type ScreenProps = {
  Camera: undefined;
  'Cat Avatar': undefined;
  'Cat Careplan': undefined;
  'Cat Details': undefined;
  'Cat Personality': undefined;
  'Create Pets Onboarding': undefined;
  'Dog Avatar': undefined;
  'Dog Careplan': undefined;
  'Dog Details': undefined;
  'Dog Personality': undefined;
  'Manage Pets': undefined;
  Search: undefined;
  // Profile: { userId: string };
};

export { CatAvatar } from './pets/create/cats/cat-avatar/cat-avatar';
export { CatCareplan } from './pets/create/cats/cat-careplan/cat-careplan';
export { CatDetails } from './pets/create/cats/cat-details/cat-details';
export { CatPersonality } from './pets/create/cats/cat-personality/cat-personality';
export { DogAvatar } from './pets/create/dogs/dog-avatar/dog-avatar';
export { DogCareplan } from './pets/create/dogs/dog-careplan/dog-careplan';
export { DogDetails } from './pets/create/dogs/dog-details/dog-details';
export { DogPersonality } from './pets/create/dogs/dog-personality/dog-personality';
export { ManagePets } from './pets/manage-pets/manage-pets';
export { Camera } from './photo/camera/camera';
export { PetSplash } from './profiles/create/pet-splash/pet-splash';
export { Search } from './search/search/search';
