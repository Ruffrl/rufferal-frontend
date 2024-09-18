import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import { ProgressBar } from '../../../../../atoms';
import { ruffwind } from '@rufferal/tailwind';

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  return (
    <View style={ruffwind``}>
      <Text>Welcome to cat - create details!</Text>
      <ProgressBar step={2} total={5} />
    </View>
  );
};
