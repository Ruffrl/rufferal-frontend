import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_LARGE } from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'react-native';
import { Button, H3, HorizontalDivider } from '../../../atoms';
import { FeatureTemplate } from '../../../templates';
import { ArrowRight } from './arrow-right/arrow-right';
import { PetItem } from './pet-item/pet-item';

export const ManagePets = observer(({ navigation }: PageNavigationProps) => {
  const pets = observablePetStore.activePets();

  return (
    <FeatureTemplate backNavigation={() => navigation.navigate('Pet Splash')}>
      <View style={ruffwind`pt-6 gap-6`}>
        <H3 text="Pet profiles" />
        {pets.length > 0 ? (
          <View style={ruffwind`gap-6`}>
            <View style={ruffwind`gap-3`}>
              {pets.map((pet) => (
                <PetItem key={pet.id} pet={pet} />
              ))}
            </View>
            <HorizontalDivider color="border-graySuit-400" />
          </View>
        ) : (
          <View style={ruffwind`py-7 items-center`}>
            <Image
              style={ruffwind.style(
                GLOBAL_ICON_SIZE_LARGE,
                'items-center justify-center mb-3'
              )}
              source={require('@rufferal/assets/src/icons/paw-print.png')}
            />
            <Text
              style={ruffwind`font-bodySemibold text-b3 text-center text-balticSea-950 mb-1`}
            >
              No saved profiles
            </Text>
            <Text
              style={ruffwind`font-body text-b3 text-center text-balticSea-950`}
            >
              After you save a profile for your pet,{`\n`}it will show up here
            </Text>
          </View>
        )}
        <Button
          onPress={() => navigation.navigate('Cat Details')}
          text="Add a cat"
          iconRight={<ArrowRight />}
          type="secondary"
        />
        <Button
          onPress={() => navigation.navigate('Dog Details')}
          text="Add a dog"
          iconRight={<ArrowRight />}
          type="secondary"
        />
      </View>
    </FeatureTemplate>
  );
});
