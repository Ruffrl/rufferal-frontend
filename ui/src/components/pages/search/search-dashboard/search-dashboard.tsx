import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
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
          style={ruffwind`flex-1 h-full`}
          data={MOCK_CARETAKERS}
          renderItem={({ item }) => <CaretakerSearchItem caretaker={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <CaretakerSearchHeader navigation={navigation} />
          }
        />
        {/* NAVIGATION */}
        <DashboardNavigation navigation={navigation} />
      </SafeAreaView>
    );
  }
);
