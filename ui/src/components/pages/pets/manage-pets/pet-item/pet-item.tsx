import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observablePetStore } from '@rufferal/store';
import { ruffwind } from '@rufferal/tailwind';
import { Pet, ScreenProps } from '@rufferal/types';
import {
  capitalize,
  createImageSize,
  GLOBAL_ICON_SIZE_LARGE,
  moderateScaleTW,
  titleCase,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { Item, VerticalDivider } from '../../../../atoms';

export const PetItem = ({ pet }: { pet: Pet }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  return (
    <Item
      onPress={() => {
        observablePetStore.setEditing({ id: pet.id });
        if (pet.details?.species === 'cat') {
          navigation.navigate('Cat Details');
        } else if (pet.details?.species === 'dog') {
          navigation.navigate('Dog Details');
        }
      }}
    >
      <View style={ruffwind`flex-row h-full gap-${moderateScaleTW(8)}`}>
        <View style={ruffwind`justify-center`}>
          {pet.avatar?.uri ? (
            <Image
              style={ruffwind.style(
                `items-center justify-center rounded-full`,
                createImageSize(34)
              )}
              source={pet.avatar.uri}
            />
          ) : (
            <View
              style={ruffwind.style(
                `items-center
                justify-center
                rounded-full
                border-electricViolet-700
                border-${moderateScaleTW(2)}
                h-${moderateScaleTW(34)}
                w-${moderateScaleTW(34)}
                `
              )}
            >
              <Image
                style={ruffwind.style(GLOBAL_ICON_SIZE_LARGE)}
                source={require('@rufferal/assets/src/icons/paw-print.png')}
                // BLARG -import from tailwind config
                tintColor={'#9525CB'}
              />
            </View>
          )}
        </View>
        <View style={ruffwind`flex-1`}>
          <Text style={ruffwind`font-bodyBold text-b4 text-balticSea-950`}>
            {pet.details?.name}
          </Text>
          <View style={ruffwind`flex-row gap-${moderateScaleTW(4)}`}>
            <Text style={ruffwind`font-body text-b2 text-saltBox-700`}>
              {capitalize(pet.details?.species)}
            </Text>
            <VerticalDivider />
            <Text style={ruffwind`font-body text-b2 text-saltBox-700`}>
              {titleCase(pet.details?.breed.label)}
            </Text>
          </View>
        </View>
      </View>
    </Item>
  );
};
