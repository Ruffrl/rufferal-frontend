import { ruffwind } from '@rufferal/tailwind';
import { FieldLabelProps } from '@rufferal/types';
import { capitalize } from '@rufferal/utils';
import { Text } from 'react-native';

export const FieldLabel = ({ text, state }: FieldLabelProps) => {
  let textStyle = `text-balticSea-950`;
  switch (state) {
    case 'errored':
      textStyle = `text-red-600`;
      break;
    case 'disabled':
      textStyle = `text-iron-500`;
      break;
  }

  return (
    <Text style={ruffwind.style(`font-bodySemibold text-b1`, textStyle)}>
      {capitalize(text)}
    </Text>
  );
};
