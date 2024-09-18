import { Text, View } from 'react-native';

import tailwind from '../../../../../tailwind';
import { FeatureTemplate } from '../../../templates';
import { Bottomsheet, Button, H3 } from '../../../atoms';

/* eslint-disable-next-line */
export interface ManagePetsProps {}

export const ManagePets = (props: ManagePetsProps) => {
  return (
    <FeatureTemplate bgColor='bg-whitePointer-50'>
    <View>
      <Text>Welcome to manage-pets!</Text>
    </View>
    </FeatureTemplate>
  );
};
