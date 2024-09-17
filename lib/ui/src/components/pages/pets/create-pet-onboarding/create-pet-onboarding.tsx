// import React from 'react';
// BLARG - is there a cleaner way to do this? Should I build an NX library/module for my tailwind customization? Then I can import as @rufferal/tailwind or something?
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import tailwind from '../../../../../tailwind';
import { verticalScale, verticalScaleTW } from '../../../../utils';
import { Bottomsheet, H2 } from '../../../atoms';

/* eslint-disable-next-line */
export interface CreatePetOnboardingProps {}

const OnboardingModal = () => {
  return (
    <View>
      <View style={tailwind`gap-3`}>
        <H2 text={<>Arf-mazing!{`\n`}Build your pet profile</>} />
        <Text
          style={tailwind`font-body text-center text-b3 text-balticSea-950`}
        >
          Add your cat or dog’s genetic details, personality,{`\n`}and care
          instructions for easy booking
        </Text>
      </View>
      <View style={tailwind`mt-[45px]`}>
      
      </View>
    </View>
  );
};

export const CreatePetOnboarding = (props: CreatePetOnboardingProps) => {
  return (
    <View style={tailwind`flex-1 bg-blizzardBlue-200`}>
      <View style={tailwind`h-${verticalScaleTW(413)}`}>
        <Image
          style={tailwind`flex-1`}
          source={require('@rufferal/assets/images/husky-and-orange-cat.png')}
        />
      </View>
      <Bottomsheet
        animateOnMount={false}
        height={verticalScale(399)}
        content={<OnboardingModal />}
        snapPoints={[verticalScale(399)]}
      />
    </View>
  );
};
