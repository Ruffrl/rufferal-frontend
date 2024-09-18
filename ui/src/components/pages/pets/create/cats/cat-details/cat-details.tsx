import { ruffwind } from '@rufferal/tailwind';
import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import { ProgressBar } from '../../../../../atoms';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  return (
    <FeatureTemplate backNavigation={() => navigation.navigate('Manage Pets')}>
      <View style={ruffwind`p-4 gap-4`}>
        <Text>Welcome to cat - create details!</Text>
        <ProgressBar step={1} total={4} />
        <ProgressBar step={1} total={5} />
        <ProgressBar step={5} total={5} />
      </View>
    </FeatureTemplate>
  );
};
