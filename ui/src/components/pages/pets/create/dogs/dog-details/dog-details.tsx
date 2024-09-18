import { ruffwind } from '@rufferal/tailwind';
import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import { ProgressBar } from '../../../../../atoms';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface DogDetailsProps extends PageNavigationProps {}

export const DogDetails = ({ navigation }: DogDetailsProps) => {
  return (
    <FeatureTemplate backNavigation={() => navigation.navigate('Manage Pets')}>
      <View style={ruffwind`p-4 gap-4`}>
        <Text>Welcome to dog - create details!</Text>
        <ProgressBar step={2} total={5} />
      </View>
    </FeatureTemplate>
  );
};
