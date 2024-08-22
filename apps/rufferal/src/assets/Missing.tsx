import { verticalScaleTW } from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const Missing = () => (
  <Image
    source={require('../../android/app/src/main/res/pikisuperstar/not-found/not-found.jpg')}
    resizeMode="contain"
    style={tw`h-${verticalScaleTW(48)} w-${verticalScaleTW(48)}`}
  />
);
