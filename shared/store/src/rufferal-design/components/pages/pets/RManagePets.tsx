import * as React from 'react';
// import tw from 'twrnc';

import { Text } from 'react-native';
import { RButton } from '../../atom';
import { RPrototypeTemplate } from '../../templates';

type ManagePetsProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCreatePet: (type: 'cat' | 'dog') => void;
};

export const RManagePets = ({
  mobileBackIcon,
  mobileCloseIcon,
  navigateBack,
  navigateCreatePet,
}: ManagePetsProps): React.ReactElement => {
  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      {/* Header */}
      <Text>Pet Profiles</Text>
      <Text>No saved profiles</Text>
      <RButton title="add cat" onPress={() => navigateCreatePet('cat')} />
      <RButton title="add dog" onPress={() => navigateCreatePet('dog')} />
      <RButton title="Back" type='secondary' onPress={navigateBack} />
    </RPrototypeTemplate>
  );
};
