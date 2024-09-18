import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface DogCareplanProps extends PageNavigationProps {}

export const DogCareplan = ({ navigation }: DogCareplanProps) => {
  return (
    <View>
      <Text>Welcome to dog - create careplan!</Text>
    </View>
  );
};
