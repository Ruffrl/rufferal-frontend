import * as React from 'react';
import tw from 'twrnc';

import { Platform, ScrollView, Text, View } from 'react-native';
import WheelPicker from 'react-native-wheely';

import {
  moderateScaleTW,
  RButton,
  RFormCreateCat,
  RFormCreateDog,
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
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  const Dropdown = () => {
    return (
      <>
        {isMobile ? (
          <View
            style={tw`border border-gray-500 rounded-${moderateScaleTW(4)}`}
          >
            <WheelPicker
              selectedIndex={0}
              options={['Berlin', 'London', 'Amsterdam']}
              onChange={(value: any) => console.log(value)}
            />
          </View>
        ) : (
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        )}
      </>
    );
  };

  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      {/* PROGRESS BAR */}
      <Dropdown />
      <View style={tw`pt-${verticalScaleTW(12)}`}>
        <RStepProgress step={1} total={3} />
      </View>
      {/* HEADER */}
      <RPageHeader header={`Create a ${petSpecies} profile`} />
      <ScrollView>
        <Text style={tw`text-gray-500 font-semibold`}>Required</Text>
        {petSpecies === 'cat' && (
          <RFormCreateCat
            mobilePlusIcon={mobilePlusIcon}
            navigateForward={() => navigateForward(petSpecies)}
          />
        )}
        {petSpecies === 'dog' && (
          <RFormCreateDog
            mobilePlusIcon={mobilePlusIcon}
            navigateForward={() => navigateForward(petSpecies)}
          />
        )}
        <View style={tw`mt-${verticalScaleTW(8)}`}>
          <RButton title="Cancel" type="secondary" onPress={navigateCancel} />
        </View>
      </ScrollView>
    </RPrototypeTemplate>
  );
};
