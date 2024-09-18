import { ruffwind } from '@rufferal/tailwind';
import { capitalize } from '@rufferal/utils';
import { Text } from 'react-native';

export interface FieldLabelProps {
  text: string;
}

export const FieldLabel = ({ text }: FieldLabelProps) => {
  return (
    <Text style={ruffwind`font-bodySemibold text-b1 text-balticSea-950`}>
      {capitalize(text)}
    </Text>
  );
};
