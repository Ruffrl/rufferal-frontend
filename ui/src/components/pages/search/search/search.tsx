import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'react-native';

export const DogCareplan = observer(({ navigation }: PageNavigationProps) => {
  return (
    <View style={ruffwind`flex-1 bg-blizzardBlue-200`}>
      <Text>SEARCH PAGE</Text>
    </View>
  );
});
