import * as React from 'react';
import tw from 'twrnc';

import { ScrollView, Text, View } from 'react-native';

import {
  moderateScaleTW,
  RButton,
  RFormCreateCat,
  RFormCreateDog,
  RFormError,
  RPageHeader,
  RPrototypeTemplate,
  RStepProgress,
  verticalScaleTW,
} from '../../../../';

export type PetSpecies = 'cat' | 'dog';

type CreatePetDetailsProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobilePlusIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCancel: () => void;
  navigateForward: (type: PetSpecies) => void;
  petSpecies: PetSpecies;
};

export const RCreatePetDetails = ({
  mobileBackIcon,
  mobileCloseIcon,
  mobilePlusIcon,
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
      {/* PROGRESS BAR */}
      <View style={tw`pt-${verticalScaleTW(12)}`}>
        <RStepProgress step={1} total={3} />
      </View>
      {/* HEADER */}
      <RPageHeader header={`Create a ${petSpecies} profile`} />
      <ScrollView>
        <Text style={tw`text-gray-500 font-semibold`}>Required</Text>
        {petSpecies === 'cat' && (
          <RFormCreateCat mobilePlusIcon={mobilePlusIcon} />
        )}
        {petSpecies === 'dog' && (
          <RFormCreateDog mobilePlusIcon={mobilePlusIcon} />
        )}
        <View style={tw`mt-${verticalScaleTW(24)} gap-${moderateScaleTW(8)}`}>
          <RFormError error="test error" />
          {/* BLARG - disabled if form not dirty */}
          <RButton title="Next" onPress={() => navigateForward(petSpecies)} />
          <RButton title="Cancel" type="secondary" onPress={navigateCancel} />
        </View>
      </ScrollView>
    </RPrototypeTemplate>
  );
};
