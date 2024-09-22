import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import { H3, ProgressBar, Tag } from '../../../../../atoms';
import { ScrollFeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatCareplanProps extends PageNavigationProps {}

export const CatCareplan = ({ navigation }: CatCareplanProps) => {
  return (
    <ScrollFeatureTemplate>
      <View style={ruffwind`mt-6`}>
        <ProgressBar step={3} total={4} />
      </View>
      <View style={ruffwind`mt-6 gap-2`}>
        <Tag
          Icon={() => (
            <Image
              style={ruffwind.style(
                GLOBAL_ICON_SIZE_MEDIUM_SMALL,
                'items-center justify-center'
              )}
              source={require('@rufferal/assets/src/icons/cat.png')}
            />
          )}
          text="Gavin"
        />
        <H3 text="Add a careplan" />
        <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
          Turn toggle on to include instructions in this pet’s bookings
        </Text>
      </View>
      <View style={ruffwind`mt-6 gap-2`}>
        <View>
          <Text>Harness</Text>
          <Text>Toggle</Text>
        </View>
      </View>
    </ScrollFeatureTemplate>
  );
};
