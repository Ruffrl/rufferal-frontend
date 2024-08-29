import {
  GLOBAL_PROTOTYPE_COLORS,
  GLOBAL_ICON_SIZE,
} from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const IconView = () => (
  <Image
    source={require('../../android/app/src/main/res/icons-512/eye.png')}
    resizeMode="contain"
    style={tw.style(GLOBAL_ICON_SIZE)}
    tintColor={GLOBAL_PROTOTYPE_COLORS.primary.hex}
  />
);
