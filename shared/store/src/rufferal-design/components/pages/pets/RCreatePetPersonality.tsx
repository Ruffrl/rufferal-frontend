import * as React from 'react';
// import tw from 'twrnc';

import { Text } from 'react-native';
import { RButton, RPrototypeTemplate } from '../..';

export type PetSpecies = 'cat' | 'dog';

type CreatePetPersonalityProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCancel: () => void;
  navigateForward: () => void;
};

export const RCreatePetPersonality = ({
  mobileBackIcon,
  mobileCloseIcon,
  navigateBack,
  navigateCancel,
  navigateForward,
}: CreatePetPersonalityProps): React.ReactElement => {
  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      <Text>Progress bar 2/3</Text>
      {/* Header */}
      <Text>Behavior and Personality</Text>
      <Text>Helper text</Text>
      <Text>Form 1</Text>
      <Text>Form 2</Text>
      <Text>Form 3</Text>
      <Text>Form etc...</Text>
      {/* BLARG - if form dirty "Next"; if form not dirty "Skip"  */}
      <RButton title="Next (skip)" onPress={navigateForward} />
      <RButton title="Cancel" type="secondary" onPress={navigateCancel} />
    </RPrototypeTemplate>
  );
};
