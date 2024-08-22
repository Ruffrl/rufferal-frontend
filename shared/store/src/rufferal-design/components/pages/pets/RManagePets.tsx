import * as React from 'react';
import tw from 'twrnc';

import { Image, ScrollView, Text, View } from 'react-native';
import {
  GLOBAL_COLORS,
  GLOBAL_ICON_SIZE,
  PetSpecies,
  RButton,
  RPrototypeTemplate,
  verticalScaleTW,
} from '../../../../';

type ManagePetsProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobilePlusIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCreatePet: (type: PetSpecies) => void;
};

export const RManagePets = ({
  mobileBackIcon,
  mobileCloseIcon,
  mobilePlusIcon,
  navigateBack,
  navigateCreatePet,
}: ManagePetsProps): React.ReactElement => {
  const hasPets = true;

  const AddNewPet = () => (
    <>
      <RButton
        titleIcon={<PlusIcon />}
        title="Add a cat"
        onPress={() => navigateCreatePet('cat')}
        size="medium"
        type="secondary"
      />
      <RButton
        titleIcon={<PlusIcon />}
        title="Add a dog"
        onPress={() => navigateCreatePet('dog')}
        size="medium"
        type="secondary"
      />
    </>
  );

  const PlusIcon = () => (
    <>
      {mobilePlusIcon || (
        <Image
          source={require('../../../../assets/icons-512/plus.png')}
          resizeMode="contain"
          style={tw.style(GLOBAL_ICON_SIZE)}
          tintColor={GLOBAL_COLORS.quaternary.hex}
        />
      )}
    </>
  );

  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
      navigationHeader="Pet Profiles"
    >
      <View
        style={tw`
        justify-between
        h-full
        pt-${verticalScaleTW(12)}
        pb-${verticalScaleTW(8)}
      `}
      >
        {hasPets ? (
          <View style={tw`h-2/5`}>
            <ScrollView>
              <Text style={tw`border border-black h-10`}>Pet Profile 1</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 2</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 3</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 4</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 5</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 6</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 7</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 8</Text>
              <Text style={tw`border border-black h-10`}>Pet Profile 9</Text>
            </ScrollView>
            <AddNewPet />
          </View>
        ) : (
          <View
            style={tw`
            border
            border-zinc-300
            rounded-lg
            pt-${verticalScaleTW(12)}
            justify-center
            items-center
            min-h-1/2
          `}
          >
            <Text>No saved profiles</Text>
            <Text>
              Doggo ipsum heckin snoot heckin good boys heckin you are doin me a
              concern pats, mlem pupper clouds long bois.
            </Text>
            <View style={tw`justify-center`}>
              <AddNewPet />
            </View>
          </View>
        )}
        <RButton title="Back" type="secondary" onPress={navigateBack} />
      </View>
    </RPrototypeTemplate>
  );
};
