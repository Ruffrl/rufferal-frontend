import { ruffwind } from '@rufferal/tailwind';
import { FeatureNavigationProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export const FeatureNavigation = ({
  backNavigation,
  backText,
  forwardNavigation,
  forwardText,
}: FeatureNavigationProps) => {
  const containerStyles = ruffwind`justify-center`;
  const buttonStyles = ruffwind`flex-row items-center gap-1`;
  const iconStyles = ruffwind.style(
    GLOBAL_ICON_SIZE,
    'items-center justify-center'
  );
  const textStyles = ruffwind`font-bodySemibold text-electricViolet-800 text-b3`;

  return (
    <View style={ruffwind`w-full flex-row justify-between`}>
      <Pressable style={containerStyles} onPress={backNavigation}>
        <View style={buttonStyles}>
          <Image
            source={require('@rufferal/assets/src/icons/chevron-left.png')}
            style={iconStyles}
          />
          <Text style={textStyles}>{backText || 'Back'}</Text>
        </View>
      </Pressable>
      {forwardNavigation && (
        <Pressable style={containerStyles} onPress={forwardNavigation}>
          <View style={buttonStyles}>
            <Text style={textStyles}>{forwardText || 'Next'}</Text>
            <Image
              source={require('@rufferal/assets/src/icons/chevron-right.png')}
              style={iconStyles}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
};
