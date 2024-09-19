import { ruffwind } from '@rufferal/tailwind';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
import { PageNavigationProps } from '../../../..';
import { Button, H3, ProgressBar, Tag } from '../../../../../atoms';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatAvatarProps extends PageNavigationProps {}

export const CatAvatar = ({ navigation }: CatAvatarProps) => {
  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Cat Details')}
      skipNavigation={() => navigation.navigate('Cat Personality')}
    >
      <View style={ruffwind`flex-1 justify-between`}>
        <View style={ruffwind`gap-6`}>
          <View style={ruffwind`mt-6`}>
            <ProgressBar step={2} total={4} />
          </View>
          <View style={ruffwind`gap-2`}>
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
            <H3 text="Upload a profile photo" />
            <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
              This helps identify your cat to Rufferal pet caretakers
            </Text>
          </View>
          <View style={ruffwind``}>
            <Text>CIRCLE BUTTON</Text>
            <Text>Tap to change or add photo</Text>
          </View>
        </View>
        <View style={ruffwind`gap-2`}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('Cat Personality')}
          />
          <Button
            text="Cancel"
            type="transparent"
            size="standard-short"
            onPress={() => navigation.navigate('Manage Pets')}
          />
        </View>
      </View>
    </FeatureTemplate>
  );
};
