import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps, Pet } from '@rufferal/types';
import {
  capitalize,
  createImageSize,
  GLOBAL_ICON_SIZE,
  GLOBAL_ICON_SIZE_LARGE,
  moderateScaleTW,
  titleCase,
} from '@rufferal/utils';
import { observer } from 'mobx-react-lite';

import {
  Button,
  H3,
  HorizontalDivider,
  Item,
  VerticalDivider,
} from '../../../atoms';
import { FeatureTemplate } from '../../../templates';

export const ManagePets = observer(({ navigation }: PageNavigationProps) => {
  const pets = observablePetStore.activePets();

  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Create Pets Onboarding')}
    >
      <View style={ruffwind`pt-6 gap-6`}>
        <H3 text="Pet profiles" />
        {pets.length > 0 ? <Pets pets={pets} /> : <EmptyPets />}
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

/* ********** */
/* COMPONENTS */
/* ********** */
const ArrowRight = () => (
  <Image
    style={ruffwind.style(GLOBAL_ICON_SIZE, 'items-center justify-center')}
    source={require('@rufferal/assets/src/icons/arrow-circle-right.png')}
  />
);

const EmptyPets = () => (
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
    <Text style={ruffwind`font-body text-b3 text-center text-balticSea-950`}>
      After you save a profile for your pet,{`\n`}it will show up here
    </Text>
  </View>
);

const Pets = ({ pets }: { pets: Pet[] }) => (
  <View style={ruffwind`gap-6`}>
    <View style={ruffwind`gap-3`}>
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </View>
    <HorizontalDivider color="border-graySuit-400" />
  </View>
);

const PetItem = ({ pet }: { pet: Pet }) => {
  return (
    <Item>
      <View style={ruffwind`flex-row h-full gap-${moderateScaleTW(8)}`}>
        <View style={ruffwind`justify-center`}>
          {pet.avatar?.uri ? (
            <Image
              style={ruffwind.style(
                `items-center justify-center rounded-full`,
                createImageSize(34)
              )}
              source={pet.avatar.uri}
            />
          ) : (
            <View
              style={ruffwind.style(
                `items-center
                justify-center
                rounded-full
                border-electricViolet-700
                border-${moderateScaleTW(2)}
                h-${moderateScaleTW(34)}
                w-${moderateScaleTW(34)}
                `
              )}
            >
              <Image
                style={ruffwind.style(GLOBAL_ICON_SIZE_LARGE)}
                source={require('@rufferal/assets/src/icons/paw-print.png')}
                // BLARG -import from tailwind config
                tintColor={'#9525CB'}
              />
            </View>
          )}
        </View>
        <View style={ruffwind`flex-1`}>
          <Text style={ruffwind`font-bodyBold text-b4 text-balticSea-950`}>
            {pet.details?.name}
          </Text>
          <View style={ruffwind`flex-row gap-${moderateScaleTW(4)}`}>
            <Text style={ruffwind`font-body text-b2 text-saltBox-700`}>
              {capitalize(pet.details?.species)}
            </Text>
            <VerticalDivider />
            <Text style={ruffwind`font-body text-b2 text-saltBox-700`}>
              {titleCase(pet.details?.breed.label)}
            </Text>
          </View>
        </View>
      </View>
    </Item>
  );
};
