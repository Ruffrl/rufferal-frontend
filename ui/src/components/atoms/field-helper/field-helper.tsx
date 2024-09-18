import { ruffwind } from '@rufferal/tailwind';
import { Text } from 'react-native';

export interface FieldHelperProps {
  align?: string;
  text?: string;
}

export const FieldHelper = ({
  align = 'text-right',
  text = 'Required',
}: FieldHelperProps) => {
  return (
    <Text
      style={ruffwind.style(`font-body text-2.5 leading-3 text-red-600`, align)}
    >
      {text}
    </Text>
  );
};
