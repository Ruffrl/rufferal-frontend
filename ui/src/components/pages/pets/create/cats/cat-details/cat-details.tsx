import { ruffwind } from '@rufferal/tailwind';
import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import { H3, ProgressBar } from '../../../../../atoms';
import { Input } from '../../../../../molecules';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  return (
    <FeatureTemplate backNavigation={() => navigation.navigate('Manage Pets')}>
      <View style={ruffwind`pt-6 gap-6`}>
        <ProgressBar step={1} total={4} />
        <View style={ruffwind`gap-5`}>
          <View style={ruffwind`gap-2`}>
            <H3 text="Add a cat" />
            <Text
              style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}
            >
              Required information
            </Text>
          </View>
          <View style={ruffwind`gap-3`}>
            <View style={ruffwind`gap-1`}>
              <Input label="Name" />
              <Input label="Color" />
              <Input label="Breed" />
            </View>
            <View>
              <Text>Sex field</Text>
            </View>
            <View>
              <Text>Age field</Text>
            </View>
            <View>
              <Text>Size field</Text>
            </View>
            <View>
              <Text>Status field</Text>
            </View>
          </View>
        </View>
      </View>
    </FeatureTemplate>
  );
};
