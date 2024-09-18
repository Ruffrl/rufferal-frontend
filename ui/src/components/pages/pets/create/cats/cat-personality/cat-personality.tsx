import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface CatPersonalityProps extends PageNavigationProps {}

export const CatPersonality = ({ navigation }: CatPersonalityProps) => {
  return (
    <View>
      <Text>Welcome to cat - create personality!</Text>
    </View>
  );
};
