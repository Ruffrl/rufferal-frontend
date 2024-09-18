import { ruffwind } from '@rufferal/tailwind';
import { View } from 'react-native';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface*/
interface HorizontalDividerProps {}

export const HorizontalDivider = (props: HorizontalDividerProps) => {
  return <View style={ruffwind`border-b border-graySuit-400 w-full`} />;
};
