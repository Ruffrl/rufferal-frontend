import { ruffwind } from '@rufferal/tailwind';
import { FieldOption, PageNavigationProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_MEDIUM, moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'react-native';

import { CheckboxCard } from '../../../molecules';
import { FeatureTemplate } from '../../../templates';

export const SearchFilters = observer(({ navigation }: PageNavigationProps) => {
  const handlePressDog = (option: FieldOption) => {
    console.log('testing checkbox card option DOG', option);
  };

  const handlePressCat = (option: FieldOption) => {
    console.log('testing checkbox card option DOG', option);
  };

  const dogIcon = (
    <Image
      style={ruffwind.style(GLOBAL_ICON_SIZE_MEDIUM)}
      source={require('@rufferal/assets/src/icons/dog.png')}
      tintColor={'#480962'}
    />
  );

  const catIcon = (
    <Image
      style={ruffwind.style(GLOBAL_ICON_SIZE_MEDIUM)}
      source={require('@rufferal/assets/src/icons/cat.png')}
      tintColor={'#480962'}
    />
  );

  return (
    <FeatureTemplate
      bgColor="bg-whisper-50"
      backNavigation={() => navigation.navigate('Search Dashboard')}
    >
      <View style={ruffwind`flex-1 justify-between`}>
        <View style={ruffwind`gap-${moderateScaleTW(16)}`}>
          <Text
            style={ruffwind`
              font-headerExtrabold
              text-h3
              text-seance-950
              mt-${moderateScaleTW(38)}
            `}
          >
            Find the perfect match
          </Text>
          <Text>I’m looking for service for</Text>
          <CheckboxCard
            optionHeight={`h-${moderateScaleTW(40)}`}
            defaultColumnCount={2}
            optionGap={`gap-${moderateScaleTW(4)}`}
            optionDirection={'flex-row'}
          >
            <CheckboxCard.Option
              onPress={handlePressDog}
              icon={dogIcon}
              label="Dogs"
            />
            <CheckboxCard.Option
              onPress={handlePressCat}
              icon={catIcon}
              label="Cats"
            />
          </CheckboxCard>
          <Text>Select care:</Text>
          <Text>Dates</Text>
          <Text>Preferred time of day</Text>
          <Text>Search in San Antonio</Text>
        </View>
        <View style={ruffwind``}>
          <Text>Clear all</Text>
          <Text>Search</Text>
        </View>
      </View>
    </FeatureTemplate>
  );
});
