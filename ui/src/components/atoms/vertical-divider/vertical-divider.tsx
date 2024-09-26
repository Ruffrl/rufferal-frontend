import { ruffwind } from '@rufferal/tailwind';
import { Text } from 'react-native';

export const VerticalDivider = () => {
  return (
    <Text style={ruffwind`font-body text-b2 text-electricViolet-300`}>|</Text>
  );
};
