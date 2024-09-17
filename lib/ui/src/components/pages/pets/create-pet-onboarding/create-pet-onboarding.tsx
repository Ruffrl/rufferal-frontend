// import React from 'react';
// BLARG - is there a cleaner way to do this? Should I build an NX library/module for my tailwind customization? Then I can import as @rufferal/tailwind or something?
import tw from '../../../../../tailwind';

import * as expoImage from 'expo-image';
import { Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface CreatePetOnboardingProps {}

export const CreatePetOnboarding = (props: CreatePetOnboardingProps) => {
  return (
    <View style={tw`bg-blizzardBlue-200`}>
      <Text>Welcome to create-pet-onboarding!</Text>
      <expoImage.Image
        style={tw`w-48 h-48`}
        source={require('@rufferal/assets/images/husky-and-orange-cat.png')}
      />
    </View>
  );
};
