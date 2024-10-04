import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { Platform, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DashboardNavigation } from '../../../../navigation';

export const SearchFilters = observer(({ navigation }: PageNavigationProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={ruffwind.style(
        `flex-1 bg-electricViolet-100`,
        Platform.OS === 'ios' && `pt-${moderateScaleTW(insets.top)}`
      )}
    >
      {/* BLARG:TODO: update from tailwind config */}
      <StatusBar backgroundColor={'#F6E8FF'} barStyle="light-content" />
      <Text>BLARG: ADD FILTERS</Text>
      {/* NAVIGATION */}
      <DashboardNavigation navigation={navigation} />
    </View>
  );
});
