import * as React from 'react';
// import tw from 'twrnc';

import { Text } from 'react-native';
import { PetSpecies, RButton, RPrototypeTemplate } from '../..';

type CreatePetCareplanProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: (type: PetSpecies) => void;
  navigateCancel: () => void;
  navigateForward: () => void;
  petSpecies: PetSpecies;
};

export const RCreatePetCareplan = ({
  mobileBackIcon,
  mobileCloseIcon,
  navigateBack,
  navigateCancel,
  navigateForward,
  petSpecies,
}: CreatePetCareplanProps): React.ReactElement => {
  return (
    <RPrototypeTemplate
      backNavigation={() => navigateBack(petSpecies)}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      <Text>Progress bar 3/3</Text>
      {/* Header */}
      <Text>Add a care plan</Text>
      <Text>Helper text</Text>
      <Text>Walking</Text>
      <Text>Feeding</Text>
      <Text>Overnight care</Text>
      <Text>Medical care</Text>
      <Text>Special needs</Text>
      <Text>Additional notes</Text>
      {/* BLARG - if form dirty "Finish"; if form not dirty "Skip"  */}
      <RButton title="Finish (skip)" onPress={navigateForward} />
      <RButton title="Cancel" type="secondary" onPress={navigateCancel} />
    </RPrototypeTemplate>
  );
};
