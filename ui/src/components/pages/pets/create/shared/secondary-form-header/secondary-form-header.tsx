import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { PetSpecies } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { H3, Tag } from '../../../../../atoms';

export const SecondaryFormHeader = ({
  hasTag = false,
  header,
  species,
  subHeader,
  subHeaderBold = false,
}: {
  hasTag?: boolean;
  header: string;
  species: PetSpecies;
  subHeader: string;
  subHeaderBold?: boolean;
}) => {
  let imageSource;
  switch (species) {
    case 'cat':
      imageSource = require('@rufferal/assets/src/icons/cat.png');
      break;
    case 'dog':
      imageSource = require('@rufferal/assets/src/icons/dog.png');
      break;
  }
  return (
    <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
      {hasTag && <Tag
        Icon={() => (
          <Image
            style={ruffwind.style(
              GLOBAL_ICON_SIZE_MEDIUM_SMALL,
              'items-center justify-center'
            )}
            source={imageSource}
          />
        )}
        text={
          observablePetStore.currentEditingPet()?.details?.name ||
          'New ' + species
        }
      />}
      <H3 text={header} />
      <Text style={ruffwind.style(`text-balticSea-950 text-b2`, subHeaderBold ? `font-bodySemibold` : `font-body`)}>
        {subHeader}
      </Text>
    </View>
  );
};
