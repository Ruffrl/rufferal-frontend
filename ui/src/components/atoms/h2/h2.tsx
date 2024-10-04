import { ruffwind } from '@rufferal/tailwind';
import { FullTextProps } from '@rufferal/types';
import { Text } from 'react-native';

export const H2 = ({
  align = 'text-left',
  text,
  textColor = 'text-electricViolet-700',
}: FullTextProps) => {
  return (
    <Text
      style={ruffwind.style(`font-headerExtrabold text-h2`, textColor, align)}
    >
      {text}
    </Text>
  );
};
