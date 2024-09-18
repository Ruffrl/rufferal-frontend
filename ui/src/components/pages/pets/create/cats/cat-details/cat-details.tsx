import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  return (
    <View>
      <Text>Welcome to cat - create details!</Text>
    </View>
  );
};
