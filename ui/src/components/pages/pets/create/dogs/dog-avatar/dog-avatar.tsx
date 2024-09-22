import { ruffwind } from '@rufferal/tailwind';
import { Image } from 'expo-image';
import { Platform, Text, View } from 'react-native';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
import { PageNavigationProps } from '../../../..';
import { Button, H3, ProgressBar, Tag } from '../../../../../atoms';
import { Photo } from '../../../../../molecules';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface DogAvatarProps extends PageNavigationProps {}

export const DogAvatar = ({ navigation }: DogAvatarProps) => {
  const isIOS = Platform.OS === 'ios';

  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Dog Details')}
      skipNavigation={() => navigation.navigate('Dog Personality')}
      overrideSafe
    >
      <BottomSheetModalProvider>
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
                    source={require('@rufferal/assets/src/icons/dog.png')}
                  />
                )}
                text="Maya"
              />
              <H3 text="Upload a profile photo" />
              <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
                This helps identify your dog to Rufferal pet caretakers
              </Text>
            </View>
            <View style={ruffwind``}>
              <Photo />
            </View>
          </View>
          <View style={ruffwind.style(`gap-2`, !isIOS && `mb-4`)}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('Dog Personality')}
            />
            <Button
              text="Cancel"
              type="transparent"
              size="standard-short"
              onPress={() => navigation.navigate('Manage Pets')}
            />
          </View>
        </View>
      </BottomSheetModalProvider>
    </FeatureTemplate>
  );
};
