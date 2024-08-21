import * as React from 'react';
import tw from 'twrnc';

import { observer } from 'mobx-react-lite';
import { Image, Text, View } from 'react-native';

import {
  horizontalScaleTW,
  moderateScaleTW,
  RAccessTemplate,
  RButton,
  RStepProgress,
  verticalScaleTW,
} from '../../../..';

type CreateProfilePetsProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateDashboard: () => void;
  navigateForward?: () => void;
};

export const RCreateProfilePets = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    navigateBack,
    navigateDashboard,
    navigateForward,
  }: CreateProfilePetsProps): React.ReactElement => (
    <RAccessTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      <View style={tw`justify-between h-full pb-${verticalScaleTW(16)}`}>
        {/* PROGRESS BAR */}
        <RStepProgress step={4} total={4} />
        <View style={tw`flex-1 justify-center items-center`}>
          <Image
            source={require('../../../../assets/pikisuperstar/profile-creation-pets/different-pets.jpg')}
            resizeMode="contain"
            style={tw`
                border-gray-500
                h-${verticalScaleTW(200)}
                w-${horizontalScaleTW(200)}
                border-${moderateScaleTW(3)} 
              `}
          />
          <Text
            style={tw.style(
              `font-bold
                text-gray-500
                text-center
                mt-${verticalScaleTW(24)}
                text-${moderateScaleTW(24)}`
            )}
          >
            Let's create your{`\n`}pet profiles
          </Text>
        </View>
        <View style={tw`gap-${verticalScaleTW(12)}`}>
          <RButton title="Continue" onPress={navigateForward} />
          <RButton
            title="I'll fill this out later"
            type="secondary"
            onPress={navigateDashboard}
          />
        </View>
      </View>
    </RAccessTemplate>
  )
);
