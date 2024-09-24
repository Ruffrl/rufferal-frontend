import { ruffwind } from '@rufferal/tailwind';
import { FieldCharacterCountProps } from '@rufferal/types';
import { Text } from 'react-native';

export const FieldCharacterCount = ({
  align = 'text-right',
  count,
  max,
}: FieldCharacterCountProps) => {
  return (
    <Text style={ruffwind.style(`text-saltBox-700 font-body text-b1`, align)}>
      {count}/{max} characters
    </Text>
  );
};
