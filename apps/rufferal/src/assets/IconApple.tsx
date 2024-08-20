import { GLOBAL_ICON_SIZE } from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const IconApple = () => (
  <Image
    source={require('../../android/app/src/main/res/icons-512/apple.png')}
    resizeMode="contain"
    style={tw.style(GLOBAL_ICON_SIZE)}
  />
);
