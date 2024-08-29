import {
  GLOBAL_PROTOTYPE_COLORS,
  GLOBAL_ICON_SIZE,
} from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const IconCheckCircle = () => (
  <Image
    source={require('../../android/app/src/main/res/icons-512/check-circle.png')}
    resizeMode="contain"
    style={tw.style(GLOBAL_ICON_SIZE)}
    tintColor={GLOBAL_PROTOTYPE_COLORS.quaternary.hex}
  />
);
