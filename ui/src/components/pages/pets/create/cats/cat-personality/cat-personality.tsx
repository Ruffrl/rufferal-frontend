import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  GLOBAL_PROTOTYPE_COLORS,
  moderateScaleTW,
  verticalScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, ScrollView, Switch, Text, View } from 'react-native';

import { PageNavigationProps } from '../../../..';
import {
  Button,
  H3,
  HorizontalDivider,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatPersonalityProps extends PageNavigationProps {}

export const CatPersonality = ({ navigation }: CatPersonalityProps) => {
  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Cat Personality')}
      skipNavigation={() => navigation.navigate('Cat Careplan')}
    >
      <ScrollView>
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
          <H3 text="Behavior and personality" />
          <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
            Help pet caretakers understand your cat’s needs and unique traits
          </Text>
        </View>
        <View style={ruffwind`mt-5 gap-4`}>
          <View>
            <Text>Good with</Text>
            <Text>Toggle 1</Text>
            <Text>Toggle 2</Text>
            <Text>Toggle 3</Text>
            <Text>Toggle 4</Text>
          </View>
          <HorizontalDivider />
          <View>
            <Text>Personality</Text>
            <Switch
              style={ruffwind.style(
                Platform.OS === 'android' && {
                  transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                }
              )}
              thumbColor={
                true
                  ? GLOBAL_PROTOTYPE_COLORS.tertiary.hex
                  : GLOBAL_PROTOTYPE_COLORS.primary.hex
              }
              trackColor={{
                false: GLOBAL_PROTOTYPE_COLORS.secondary.hex,
                true: GLOBAL_PROTOTYPE_COLORS.successTertiary.hex,
              }}
              ios_backgroundColor={GLOBAL_PROTOTYPE_COLORS.secondary.hex}
              onValueChange={() => console.log("Toggle")}
              // value={selected === toggle}
            />
            <Text style={ruffwind`text-gray-500 text-${moderateScaleTW(16)}`}>
              Kids
            </Text>
            <Text>Slider 1</Text>
            <Text>Slider 2</Text>
            <Text>Slider 3</Text>
            <Text>Slider 4</Text>
          </View>
          <HorizontalDivider />
          <View>
            <Text>Care & behavior</Text>
            <Text>Toggle 1</Text>
            <Text>Toggle 2</Text>
            <Text>Toggle 3</Text>
            <Text>Toggle 4</Text>
          </View>
        </View>
        <View style={ruffwind.style(`gap-2 mt-${verticalScaleTW(37)}`)}>
          <HorizontalDivider color="border-amethystSmoke-600" />
          <Button
            text="Next"
            onPress={() => navigation.navigate('Cat Careplan')}
          />
          <Button
            text="Cancel"
            type="transparent"
            size="standard-short"
            onPress={() => navigation.navigate('Manage Pets')}
          />
        </View>
      </ScrollView>
    </FeatureTemplate>
  );
};
