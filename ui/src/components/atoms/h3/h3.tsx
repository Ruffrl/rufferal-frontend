import { ruffwind } from '@rufferal/tailwind';
import { FullTextProps } from '@rufferal/types';
import { Text } from 'react-native';

export const H3 = ({ align = 'text-left', text }: FullTextProps) => {
  return (
    <Text
      style={ruffwind.style(
        `font-headerExtrabold text-h3 text-electricViolet-700`,
        align
      )}
    >
      {text}
    </Text>
  );
};
