import { ruffwind } from '@rufferal/tailwind';
import { LayeredAvatarsProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { View } from 'react-native';

export const LayeredAvatars = ({ imageUrls, max = 3 }: LayeredAvatarsProps) => {
  // Limit the images to a maximum of 3
  const limitedImages = imageUrls.slice(0, max);

  return (
    <View style={ruffwind`flex-row items-center`}>
      {limitedImages.map((url, index) => (
        <Image
          key={index}
          source={url}
          style={[
            ruffwind`rounded-full h-${moderateScaleTW(
              17.42
            )} w-${moderateScaleTW(17.42)}`,
            index > 0 && { marginLeft: -9.42 }, // Overlap by 9.42px for subsequent images
          ]}
        />
      ))}
    </View>
  );
};
