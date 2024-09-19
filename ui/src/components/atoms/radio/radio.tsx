import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_ICON_SIZE_MEDIUM } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text } from 'react-native';

export interface RadioItem {
  id: string;
  label: string;
  value: string | number | boolean;
}

export interface RadioProps {
  item: RadioItem;
  onPress: (item: RadioItem) => void;
  selected?: boolean;
}

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
      style={ruffwind`flex-row flex-1 gap-1 items-center`}
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
