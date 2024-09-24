import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps, Pet } from '@rufferal/types';
import {
  capitalize,
  GLOBAL_ICON_SIZE,
  GLOBAL_ICON_SIZE_LARGE,
  titleCase,
} from '@rufferal/utils';
import {
  Button,
  H3,
  HorizontalDivider,
  Item,
  VerticalDivider,
} from '../../../atoms';
import { FeatureTemplate } from '../../../templates';

export const ManagePets = ({ navigation }: PageNavigationProps) => {
  // observablePetStore.createPet({
  //   avatar: require('@rufferal/assets/src/images/cat-profile-stock-photo.jpeg'),
  //   details: {
  //     species: 'cat',
  //     name: 'Gavin',
  //     color: {
  //       id: 'hwfkdiwxkph',
  //       label: 'Black',
  //       value: 'black',
  //     },
  //     breed: {
  //       id: 'xoxpvpaezt8',
  //       label: 'Bombay',
  //       value: 'bombay',
  //     },
  //     sex: {
  //       id: 'whseq6w1c1e',
  //       label: 'Male',
  //       value: 'male',
  //     },
  //     age: {
  //       id: 'l0joaxmw6ym',
  //       label: 'Adult (2–8 Years)',
  //       value: 'adult (2–8 years)',
  //     },
  //     size: {
  //       id: 'ynxe968m0d',
  //       label: 'Medium (7–11 Lbs)',
  //       value: 'medium (7–11 lbs)',
  //     },
  //     status: {
  //       id: '6az7qovb505',
  //       label: 'Yes',
  //       value: 'yes',
  //     },
  //   },
  // });
  // observablePetStore.createPet({
  //   avatar: require('@rufferal/assets/src/images/dog-profile-stock-photo.jpeg'),
  //   details: {
  //     species: 'dog',
  //     name: 'Maya',
  //     color: {
  //       id: '74kgz8267nt',
  //       label: 'Black & Brown',
  //       value: 'black & brown',
  //     },
  //     breed: {
  //       id: 'v52lvv3bwsh',
  //       label: 'German Shepherd Dog',
  //       value: 'german shepherd dog',
  //     },
  //     sex: {
  //       id: 'axhqeqqr8lt',
  //       label: 'Female',
  //       value: 'female',
  //     },
  //     age: {
  //       id: '5zs17oz2198',
  //       label: 'Senior (8+ Years)',
  //       value: 'senior (8+ years)',
  //     },
  //     size: {
  //       id: 'wyin6hsd8po',
  //       label: 'Large (41–100 Lbs)',
  //       value: 'large (41–100 lbs)',
  //     },
  //     status: {
  //       id: '6az7qovb505',
  //       label: 'Yes',
  //       value: 'yes',
  //     },
  //   },
  // });
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
};

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
      <View style={ruffwind`flex-row h-full gap-2`}>
        <View style={ruffwind`justify-center`}>
          <Image
            style={ruffwind`items-center justify-center h-[34px] w-[34px] rounded-full`}
            source={pet.avatar}
          />
        </View>
        <View style={ruffwind`flex-1`}>
          <Text style={ruffwind`font-bodyBold text-b4 text-balticSea-950`}>
            {pet.details.name}
          </Text>
          <View style={ruffwind`flex-row gap-1`}>
            <Text style={ruffwind`font-body text-b2 text-saltBox-700`}>
              {capitalize(pet.details.species)}
            </Text>
            <VerticalDivider />
            <Text style={ruffwind`font-body text-b2 text-saltBox-700`}>
              {titleCase(pet.details.breed.label)}
            </Text>
          </View>
        </View>
      </View>
    </Item>
  );
};
