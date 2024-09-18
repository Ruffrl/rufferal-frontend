import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface CatAvatarProps extends PageNavigationProps {}

export const CatAvatar = ({ navigation }: CatAvatarProps) => {
  return (
    <View>
      <Text>Welcome to cat - create avatar!</Text>
    </View>
  );
};
