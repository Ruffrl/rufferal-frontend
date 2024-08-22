import { Text } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW, verticalScaleTW } from '../../utils';

export const RPageHeader = ({
  header = 'Rufferal',
  removeTopPadding = false,
}: {
  header?: string;
  removeTopPadding?: boolean;
}) => (
  <Text
    style={tw.style(
      `font-bold
      text-gray-500
      py-${verticalScaleTW(24)}
      text-${moderateScaleTW(24)}`,
      removeTopPadding && tw`pt-0`
    )}
  >
    {header}
  </Text>
);
