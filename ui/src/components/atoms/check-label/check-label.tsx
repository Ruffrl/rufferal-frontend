import { ruffwind } from '@rufferal/tailwind';
import { LabelProps } from '@rufferal/types';
import { capitalize } from '@rufferal/utils';
import { Text } from 'react-native';

export const CheckLabel = ({ text, state }: LabelProps) => {
  let textStyle = `text-saltBox-700`;
  switch (state) {
    case 'errored':
      textStyle = `text-red-600`;
      break;
    case 'disabled':
      textStyle = `text-iron-500`;
      break;
  }

  return (
    <Text style={ruffwind.style(`font-body text-b3`, textStyle)}>
      {capitalize(text)}
    </Text>
  );
};
