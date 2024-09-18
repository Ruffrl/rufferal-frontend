import { ruffwind } from '@rufferal/tailwind';
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
    <View style={ruffwind`w-full flex-row justify-between`}>
      <Pressable style={ruffwind`justify-center`} onPress={backNavigation}>
        <View style={ruffwind`flex-row items-center gap-1`}>
          <Image
            source={require('@rufferal/assets/src/icons/chevron-left.png')}
            style={ruffwind.style(
              GLOBAL_ICON_SIZE,
              'items-center justify-center'
            )}
          />
          <Text
            style={ruffwind`font-bodySemibold text-electricViolet-800 text-b3`}
          >
            Back
          </Text>
        </View>
      </Pressable>
      {skipNavigation && (
        <Pressable
          style={ruffwind.style(
            GLOBAL_MIN_PRESS_SIZE,
            ruffwind`justify-center`
          )}
          onPress={skipNavigation}
        >
          <View style={ruffwind`flex-row items-center gap-1`}>
            <Text
              style={ruffwind`font-bodySemibold text-electricViolet-800 text-b3`}
            >
              Skip
            </Text>
            <Image
              source={require('@rufferal/assets/src/icons/chevron-left.png')}
              style={ruffwind.style(
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
