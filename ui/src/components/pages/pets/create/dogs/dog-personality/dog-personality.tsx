import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface DogPersonalityProps extends PageNavigationProps {}

export const DogPersonality = ({ navigation }: DogPersonalityProps) => {
  return (
    <View>
      <Text>Welcome to dog - create personality!</Text>
    </View>
  );
};
