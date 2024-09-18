import { Text } from 'react-native';

import tailwind from '../../../../tailwind';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface*/
interface VerticalDividerProps {}

export const VerticalDivider = (props: VerticalDividerProps) => {
  return (
    <Text style={tailwind`font-body text-b2 text-electricViolet-300`}>|</Text>
  );
};
