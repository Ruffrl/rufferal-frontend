import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';

/* eslint-disable-next-line */
export interface CatCareplanProps extends PageNavigationProps {}

export const CatCareplan = ({ navigation }: CatCareplanProps) => {
  return (
    <View>
      <Text>Welcome to cat - create careplan!</Text>
    </View>
  );
};
