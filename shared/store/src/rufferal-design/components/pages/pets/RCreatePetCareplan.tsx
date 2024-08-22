// import * as React from 'react';

// import { Text } from 'react-native';
// import { RPrototypeTemplate } from '../../templates';

// export const RCreatePetCareplan = (): React.ReactElement => {
//   return (
//     <RPrototypeTemplate>
//       {/* Navigation */}
//       <Text>⬅️</Text>
//       {/* Header */}
//       <Text>Create pet careplan</Text>
//     </RPrototypeTemplate>
//   );
// };

import * as React from 'react';
// import tw from 'twrnc';

import { Text } from 'react-native';
import { RButton, RPrototypeTemplate } from '../..';

export type PetSpecies = 'cat' | 'dog';

type CreatePetCareplanProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCancel: () => void;
  navigateForward: () => void;
};

export const RCreatePetCareplan = ({
  mobileBackIcon,
  mobileCloseIcon,
  navigateBack,
  navigateCancel,
  navigateForward,
}: CreatePetCareplanProps): React.ReactElement => {
  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
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
