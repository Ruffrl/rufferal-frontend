import { tailwind } from '@rufferal/tailwind';
import { View } from 'react-native';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface*/
interface HorizontalDividerProps {}

export const HorizontalDivider = (props: HorizontalDividerProps) => {
  return <View style={tailwind`border-b border-graySuit-400 w-full`} />;
};
