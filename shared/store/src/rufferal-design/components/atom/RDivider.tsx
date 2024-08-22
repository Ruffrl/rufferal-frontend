import { View } from 'react-native';
import tw from 'twrnc';
import { horizontalScaleTW } from '../../utils';

export const RDivider = () => {
  return (
    <View style={tw`border-b border-gray-200 w-${horizontalScaleTW(150)}`} />
  );
};
