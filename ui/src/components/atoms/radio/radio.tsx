import { ruffwind } from '@rufferal/tailwind';
import { RadioProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_MEDIUM } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text } from 'react-native';

export const Radio = ({ item, onPress, selected = false }: RadioProps) => {
  const Selected = () => (
    <Image
      style={ruffwind.style(
        GLOBAL_ICON_SIZE_MEDIUM,
        'items-center justify-center'
      )}
      source={require('@rufferal/assets/src/icons/radio-on.png')}
    />
  );
  const Unselected = () => (
    <Image
      style={ruffwind.style(
        GLOBAL_ICON_SIZE_MEDIUM,
        'items-center justify-center'
      )}
      source={require('@rufferal/assets/src/icons/radio-off.png')}
    />
  );

  return (
    <Pressable
      // BLARG:TODO: investigate if safe to remove flex-1
      style={ruffwind`flex-row gap-1 items-center`}
      onPress={() => onPress(item)}
      id={item.id}
    >
      {selected ? <Selected /> : <Unselected />}
      <Text style={ruffwind`text-codGray-950 font-body text-b2`}>
        {item.label}
      </Text>
    </Pressable>
  );
};
