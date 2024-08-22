import { Text, View } from 'react-native';
import tw from 'twrnc';
import { RDivider } from '..';
import { moderateScaleTW, verticalScaleTW } from '../../utils';

export const ROrDivider = () => {
  return (
    <View
      style={tw`justify-evenly flex-row items-center py-${verticalScaleTW(12)}`}
    >
      <RDivider />
      <Text style={tw`text-gray-500 text-${moderateScaleTW(12)}`}>OR</Text>
      <RDivider />
    </View>
  );
};
