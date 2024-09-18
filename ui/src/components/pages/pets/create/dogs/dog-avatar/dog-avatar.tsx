import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface DogAvatarProps extends PageNavigationProps {}

export const DogAvatar = ({ navigation }: DogAvatarProps) => {
  return (
    <View>
      <Text>Welcome to dog - create avatar!</Text>
    </View>
  );
};
