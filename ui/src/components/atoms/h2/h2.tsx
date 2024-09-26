import { ruffwind } from '@rufferal/tailwind';
import { FullTextProps } from '@rufferal/types';
import { Text } from 'react-native';


export const H2 = ({ align = 'text-center', text }: FullTextProps) => {
  return (
    <Text
      style={ruffwind.style(
        `font-headerExtrabold text-h2 text-electricViolet-700`,
        align
      )}
    >
      {text}
    </Text>
  );
};
