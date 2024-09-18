import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { observablePetStore, Pet } from '@rufferal/store';
import {
  capitalize,
  GLOBAL_ICON_SIZE,
  GLOBAL_ICON_SIZE_LARGE,
  titleCase,
} from '@rufferal/utils';
import tailwind from '../../../../../tailwind';
import {
  Button,
  Card,
  H3,
  HorizontalDivider,
  VerticalDivider,
} from '../../../atoms';
import { FeatureTemplate } from '../../../templates';
import { PageNavigationProps } from '../../types/page-props';

// interface ManagePetsProps extends PageNavigationProps {}

export const ManagePets = ({ navigation }: PageNavigationProps) => {
  observablePetStore.addPet({
    name: 'gavin',
    species: 'cat',
    breed: 'american shorthair',
    avatar: require('@rufferal/assets/src/images/cat-profile-stock-photo.jpeg'),
  });
  observablePetStore.addPet({
    name: 'maya',
    species: 'dog',
    breed: 'german shepard',
    avatar: require('@rufferal/assets/src/images/dog-profile-stock-photo.jpeg'),
  });
  const pets = observablePetStore.activePets();

  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Create Pets Onboarding')}
    >
      <View style={tailwind`pt-6 gap-6`}>
        <H3 text="Pet profiles" />
        {pets.length > 0 ? <Pets pets={pets} /> : <EmptyPets />}
        <Button text="Add a cat" iconRight={<ArrowRight />} type="secondary" />
        <Button text="Add a dog" iconRight={<ArrowRight />} type="secondary" />
      </View>
    </FeatureTemplate>
  );
};

/* ********** */
/* COMPONENTS */
/* ********** */
const ArrowRight = () => (
  <Image
    style={tailwind.style(GLOBAL_ICON_SIZE, 'items-center justify-center')}
    source={require('@rufferal/assets/src/icons/arrow-circle-right.png')}
  />
);

const EmptyPets = () => (
  <View style={tailwind`py-7 items-center`}>
    <Image
      style={tailwind.style(
        GLOBAL_ICON_SIZE_LARGE,
        'items-center justify-center mb-3'
      )}
      source={require('@rufferal/assets/src/icons/paw-print.png')}
    />
    <Text
      style={tailwind`font-bodySemibold text-b3 text-center text-balticSea-950 mb-1`}
    >
      No saved profiles
    </Text>
    <Text style={tailwind`font-body text-b3 text-center text-balticSea-950`}>
      After you save a profile for your pet,{`\n`}it will show up here
    </Text>
  </View>
);

const Pets = ({ pets }: { pets: Pet[] }) => (
  <View style={tailwind`gap-6`}>
    <View style={tailwind`gap-3`}>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </View>
    <HorizontalDivider />
  </View>
);

const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <Card>
      <View style={tailwind`flex-row h-full gap-2`}>
        <View style={tailwind`justify-center`}>
          <Image
            style={tailwind`items-center justify-center h-[34px] w-[34px] rounded-full`}
            source={pet.avatar}
          />
        </View>
        <View style={tailwind`flex-1`}>
          <Text style={tailwind`font-bodyBold text-b4 text-balticSea-950`}>
            {capitalize(pet.name)}
          </Text>
          <View style={tailwind`flex-row gap-1`}>
            <Text style={tailwind`font-body text-b2 text-saltBox-700`}>
              {capitalize(pet.species)}
            </Text>
            <VerticalDivider />
            <Text style={tailwind`font-body text-b2 text-saltBox-700`}>
              {titleCase(pet.breed)}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};
