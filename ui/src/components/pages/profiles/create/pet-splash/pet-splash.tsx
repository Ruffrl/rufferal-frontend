// import React from 'react';
import { Image } from 'expo-image';
import { Platform, Text, View } from 'react-native';

import { tailwind } from '@rufferal/tailwind';
import { verticalScale, verticalScaleTW } from '@rufferal/utils';
import { Bottomsheet, Button, H2 } from '../../../../atoms';
import { SplashTemplate } from '../../../../templates';
import { PageNavigationProps } from '../../../types/page-props';

// interface PetSplashProps extends PageNavigationProps {}

export const PetSplash = ({ navigation }: PageNavigationProps) => {
  const isIOS = Platform.OS === 'ios';

  return (
    <SplashTemplate bgColor="bg-blizzardBlue-200">
      <View
        style={tailwind.style(
          isIOS ? `h-${verticalScaleTW(378)}` : `h-${verticalScaleTW(412)}`
        )}
      >
        <Image
          style={tailwind`flex-1`}
          source={require('@rufferal/assets/src/images/husky-and-orange-cat.png')}
        />
      </View>
      <Bottomsheet
        content={<PetSplashSheet navigation={navigation} />}
        snapPoints={isIOS ? [verticalScale(389)] : [verticalScale(399)]}
      />
    </SplashTemplate>
  );
};

/* ********** */
/* COMPONENTS */
/* ********** */
const PetSplashSheet = ({ navigation }: PageNavigationProps) => {
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
      <View style={tailwind`mt-[45px] gap-2`}>
        <Button onPress={() => navigation.navigate('Manage Pets')} />
        <Button
          onPress={() => navigation.navigate('Search')}
          text="Skip for now"
          type="transparent"
          size="standard-short"
          rounded={false}
        />
      </View>
    </View>
  );
};
