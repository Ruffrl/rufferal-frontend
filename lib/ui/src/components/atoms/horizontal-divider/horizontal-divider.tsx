import { View } from 'react-native';
import tailwind from '../../../../tailwind';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface*/
interface HorizontalDividerProps {}

export const HorizontalDivider = (props: HorizontalDividerProps) => {
  return <View style={tailwind`border-b border-graySuit-400 w-full`} />;
};
