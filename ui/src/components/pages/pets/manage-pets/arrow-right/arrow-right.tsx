import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_ICON_SIZE } from '@rufferal/utils';
import { Image } from 'expo-image';

export const ArrowRight = () => (
  <Image
    style={ruffwind.style(GLOBAL_ICON_SIZE, 'items-center justify-center')}
    source={require('@rufferal/assets/src/icons/arrow-circle-right.png')}
  />
);
