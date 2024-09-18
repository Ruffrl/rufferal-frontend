import { tailwind } from '@rufferal/tailwind';
import { Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface SearchProps {}

export const Search = (props: SearchProps) => {
  return (
    <View style={tailwind`flex-1 bg-blizzardBlue-200`}>
      <Text>SEARCH PAGE</Text>
    </View>
  );
};
