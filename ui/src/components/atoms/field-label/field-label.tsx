import { ruffwind } from '@rufferal/tailwind';
import { LabelProps } from '@rufferal/types';
import { capitalize } from '@rufferal/utils';
import { Text } from 'react-native';

export const FieldLabel = ({ text, size = 'default', state }: LabelProps) => {
  let textSize = 'text-b1';
  let textStyle = `text-balticSea-950`;

  switch (size) {
    case 'large':
      textSize = `text-b2`;
      break;
    case 'xlarge':
      textSize = `text-b3`;
      break;
    case '2xlarge':
      textSize = `text-b4`;
      break;
  }
  switch (state) {
    case 'errored':
      textStyle = `text-red-600`;
      break;
    case 'disabled':
      textStyle = `text-iron-500`;
      break;
  }

  return (
    <Text style={ruffwind.style(`font-bodySemibold`, textSize, textStyle)}>
      {capitalize(text)}
    </Text>
  );
};
