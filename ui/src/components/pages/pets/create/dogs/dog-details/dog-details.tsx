import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface DogDetailsProps extends PageNavigationProps {}

export const DogDetails = ({ navigation }: DogDetailsProps) => {
  return (
    <View>
      <Text>Welcome to dog - create details!</Text>
    </View>
  );
};
