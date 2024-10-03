import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { observer } from 'mobx-react-lite';
import { FlatList, SafeAreaView } from 'react-native';

import { DashboardNavigation } from '../../../../navigation';
import { CaretakerSearchHeader, CaretakerSearchItem } from '../../../organisms';
import { MOCK_CARETAKERS } from './mock-constants';

export const SearchDashboard = observer(
  ({ navigation }: PageNavigationProps) => {
    return (
      <SafeAreaView style={ruffwind`flex-1`}>
        {/* HEADER + FILTERS + ALL RESULTS */}
        <FlatList
          style={ruffwind`flex-1 h-full bg-whisper-50`}
          numColumns={2}
          data={MOCK_CARETAKERS}
          renderItem={({ item, index }) => (
            <CaretakerSearchItem
              caretaker={item}
              index={index}
              itemCount={MOCK_CARETAKERS.length}
            />
          )}
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
      </SafeAreaView>
    );
  }
);
