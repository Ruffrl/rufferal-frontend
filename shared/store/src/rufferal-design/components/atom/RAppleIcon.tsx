import { Image } from 'react-native';
import tw from 'twrnc';
import { GLOBAL_ICON_SIZE } from '../../utils';

export const RAppleIcon = () => (
  <Image
    source={require('../../../assets/icons-512/apple.png')}
    resizeMode="contain"
    style={tw.style(GLOBAL_ICON_SIZE)}
  />
);
