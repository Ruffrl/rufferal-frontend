import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_ICON_SIZE } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export const PageNavigation = ({
  backNavigation,
  skipNavigation,
}: {
  backNavigation: () => void;
  skipNavigation?: () => void;
}) => {
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
          <Text style={textStyles}>Back</Text>
        </View>
      </Pressable>
      {skipNavigation && (
        <Pressable style={containerStyles} onPress={skipNavigation}>
          <View style={buttonStyles}>
            <Text style={textStyles}>Skip</Text>
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
