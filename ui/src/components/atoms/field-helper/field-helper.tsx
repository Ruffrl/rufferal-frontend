import { ruffwind } from '@rufferal/tailwind';
import { FullTextProps } from '@rufferal/types';
import { Text } from 'react-native';

export const FieldHelper = ({
  align = 'text-right',
  text = 'Required',
}: FullTextProps) => {
  return (
    <Text
      style={ruffwind.style(`font-body text-2.5 leading-3 text-red-600`, align)}
    >
      {text}
    </Text>
  );
};
