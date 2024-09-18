import tailwind from '../../../../tailwind';

import { GLOBAL_ICON_SIZE, GLOBAL_MIN_PRESS_SIZE } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export const PageNavigation = ({
  backNavigation,
  skipNavigation,
}: {
  backNavigation: () => void;
  skipNavigation?: () => void;
}) => {
  return (
    <View style={tailwind`w-full flex-row justify-between`}>
      <Pressable style={tailwind`justify-center`} onPress={backNavigation}>
        <View style={tailwind`flex-row items-center gap-1`}>
          <Image
            source={require('@rufferal/assets/src/icons/chevron-left.png')}
            style={tailwind.style(
              GLOBAL_ICON_SIZE,
              'items-center justify-center'
            )}
          />
          <Text
            style={tailwind`font-bodySemibold text-electricViolet-800 text-b3`}
          >
            Back
          </Text>
        </View>
      </Pressable>
      {skipNavigation && (
        <Pressable
          style={tailwind.style(
            GLOBAL_MIN_PRESS_SIZE,
            tailwind`justify-center`
          )}
          onPress={skipNavigation}
        >
          <View style={tailwind`flex-row items-center gap-1`}>
            <Text
              style={tailwind`font-bodySemibold text-electricViolet-800 text-b3`}
            >
              Skip
            </Text>
            <Image
              source={require('@rufferal/assets/src/icons/chevron-right.png')}
              style={tailwind.style(
                GLOBAL_ICON_SIZE,
                'items-center justify-center'
              )}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
};
