import { GLOBAL_COLORS, GLOBAL_ICON_SIZE } from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const IconCamera = () => (
  <Image
    source={require('../../android/app/src/main/res/icons-512/camera.png')}
    resizeMode="contain"
    style={tw.style(GLOBAL_ICON_SIZE)}
    tintColor={GLOBAL_COLORS.tertiary.hex}
  />
);
