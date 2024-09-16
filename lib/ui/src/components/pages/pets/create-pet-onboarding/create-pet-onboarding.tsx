import { Image } from 'expo-image';
import { Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface CreatePetOnboardingProps {}

export const CreatePetOnboarding = (props: CreatePetOnboardingProps) => {
  return (
    <View>
      <Text>Welcome to create-pet-onboarding!</Text>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={require('@rufferal/assets/images/husky-and-orange-cat.png')}
      />
    </View>
  );
};
