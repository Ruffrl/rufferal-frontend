import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { verticalScale, verticalScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, Text, View } from 'react-native';

import { Bottomsheet, Button, H2 } from '../../../atoms';
import { SplashTemplate } from '../../../templates';

export const ProfileSplash = ({ navigation }: PageNavigationProps) => {
  const isIOS = Platform.OS === 'ios';

  return (
    <SplashTemplate bgColor="bg-blizzardBlue-200">
      <View
        style={ruffwind.style(
          isIOS ? `h-${verticalScaleTW(378)}` : `h-${verticalScaleTW(412)}`
        )}
      >
        <Image
          style={ruffwind`flex-1`}
          source={require('@rufferal/assets/src/images/orange-kitten-small.png')}
        />
      </View>
      <Bottomsheet
        content={<ProfileSplashSheet navigation={navigation} />}
        snapPoints={isIOS ? [verticalScale(389)] : [verticalScale(399)]}
      />
    </SplashTemplate>
  );
};

/* ********** */
/* COMPONENTS */
/* ********** */
const ProfileSplashSheet = ({ navigation }: PageNavigationProps) => {
  return (
    <View>
      <View style={ruffwind`gap-3`}>
        <H2
          align="text-center"
          text={<>Arf-mazing!{`\n`}Build your pet profile</>}
        />
        <Text
          style={ruffwind`font-body text-center text-b3 text-balticSea-950`}
        >
          Add your cat or dog’s genetic details, personality,{`\n`}and care
          instructions for easy booking
        </Text>
      </View>
      <View style={ruffwind`mt-[45px] gap-2`}>
        <Button onPress={() => navigation.navigate('Pets Dashboard')} />
        <Button
          onPress={() => navigation.navigate('Search Dashboard')}
          text="Skip for now"
          type="transparent"
          size="standard-short"
          rounded={false}
        />
      </View>
    </View>
  );
};
