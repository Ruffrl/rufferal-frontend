import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { FlatList, Platform, StatusBar, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DashboardNavigation } from '../../../../navigation';
import { CaretakerSearchHeader, CaretakerSearchItem } from '../../../organisms';
import { MOCK_CARETAKERS } from './mock-constants';

export const SearchDashboard = observer(
  ({ navigation }: PageNavigationProps) => {
    const insets = useSafeAreaInsets();

    return (
      <View
        style={ruffwind.style(
          `flex-1 bg-electricViolet-100`,
          Platform.OS === 'ios' && `pt-${moderateScaleTW(insets.top)}`
        )}
      >
        <StatusBar backgroundColor={'#F6E8FF'} barStyle="light-content" />
        {/* HEADER + FILTERS + ALL RESULTS */}
        <FlatList
          style={ruffwind`flex-1 h-full bg-whisper-50`}
          numColumns={2}
          data={MOCK_CARETAKERS}
          horizontal={false}
          renderItem={({ item }) => <CaretakerSearchItem caretaker={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <CaretakerSearchHeader navigation={navigation} />
          }
          columnWrapperStyle={ruffwind`
            gap-${moderateScaleTW(15)} px-${moderateScaleTW(20)}
          `}
        />
        {/* NAVIGATION */}
        <DashboardNavigation navigation={navigation} />
      </View>
    );
  }
);
