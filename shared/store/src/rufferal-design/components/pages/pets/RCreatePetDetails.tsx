import * as React from 'react';
import tw from 'twrnc';

import { Text, View } from 'react-native';
import {
  RButton,
  RPrototypeTemplate,
  RStepProgress,
  verticalScaleTW,
} from '../../../../';

export type PetSpecies = 'cat' | 'dog';

type CreatePetDetailsProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCancel: () => void;
  navigateForward: (type: PetSpecies) => void;
  petSpecies: PetSpecies;
};

export const RCreatePetDetails = ({
  mobileBackIcon,
  mobileCloseIcon,
  navigateBack,
  navigateCancel,
  navigateForward,
  petSpecies,
}: CreatePetDetailsProps): React.ReactElement => {
  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      <View style={tw`pt-${verticalScaleTW(12)}`}>
        <RStepProgress step={1} total={3} />
      </View>
      {/* Header */}
      <Text>Create a {petSpecies} profile</Text>
      <Text>Helper text</Text>
      <Text>Form 1</Text>
      <Text>Form 2</Text>
      <Text>Form 3</Text>
      <Text>Form 4</Text>
      <Text>Form 5</Text>
      <Text>Form 6</Text>
      <Text>Form etc...</Text>
      {/* BLARG - disabled if form not dirty */}
      <RButton title="Next" onPress={() => navigateForward(petSpecies)} />
      <RButton title="Cancel" type="secondary" onPress={navigateCancel} />
    </RPrototypeTemplate>
  );
};
