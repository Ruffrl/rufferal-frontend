import { Text } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW, verticalScaleTW } from '../../utils';

export const RPageHeader = ({
  header = 'Rufferal',
  removePadding = false,
}: {
  header?: string;
  removePadding?: boolean;
}) => (
  <Text
    style={tw.style(
      `font-bold
      text-gray-500
      py-${verticalScaleTW(24)}
      text-${moderateScaleTW(24)}`,
      removePadding && tw`py-0`
    )}
  >
    {header}
  </Text>
);
