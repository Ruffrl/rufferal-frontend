import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_ICON_SIZE_LARGE, moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { PhotoModal } from './photo-modal';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PhotoProps {}

// ⚠️ USAGE - to use this you must wrap your page with BottomSheetModalProvider
export const Photo = (props: PhotoProps) => {
  const circleFrameStyles = ruffwind`
    items-center
    justify-center
    h-${moderateScaleTW(100)}
    rounded-${moderateScaleTW(100)}
    w-${moderateScaleTW(100)}`;

  const EmptyState = () => (
    <View
      style={ruffwind.style(
        circleFrameStyles,
        `border-electricViolet-600 border-${moderateScaleTW(2)}`
      )}
    >
      <Image
        style={ruffwind.style(
          GLOBAL_ICON_SIZE_LARGE,
          'items-center justify-center'
        )}
        source={require('@rufferal/assets/src/icons/image.png')}
      />
    </View>
  );

  return (
    <View style={ruffwind`gap-3 items-center justify-center`}>
      <Pressable onPress={() => console.log('PHOTO')}>
        <EmptyState />
      </Pressable>
      <Text style={ruffwind`text-balticSea-950 font-bodySemibold text-b2`}>
        Tap to change or add photo
      </Text>
      <PhotoModal />
    </View>
  );
};
