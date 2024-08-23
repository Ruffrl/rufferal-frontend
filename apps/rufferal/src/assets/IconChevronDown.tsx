import { GLOBAL_COLORS, GLOBAL_SMALL_ICON_SIZE } from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const IconChevronDown = () => (
  <Image
    source={require('../../android/app/src/main/res/icons-512/chevron-down.png')}
    resizeMode="contain"
    style={tw.style(GLOBAL_SMALL_ICON_SIZE)}
    tintColor={GLOBAL_COLORS.tertiary.hex}
  />
);
