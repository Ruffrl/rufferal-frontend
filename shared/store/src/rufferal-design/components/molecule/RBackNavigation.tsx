import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import tw from 'twrnc';
import {
  GLOBAL_COLORS,
  GLOBAL_ICON_SIZE,
  GLOBAL_MIN_PRESS_SIZE,
} from '../../utils';

export const RBackNavigation = ({
  backNavigation,
  mobileBackIcon,
}: {
  backNavigation: () => void;
  mobileBackIcon?: React.JSX.Element;
}) => {
  return (
    <View>
      <Pressable
        style={tw.style(GLOBAL_MIN_PRESS_SIZE)}
        onPress={backNavigation}
      >
        {mobileBackIcon || (
          <Image
            source={require('../../../assets/icons-512/arrow-left.png')}
            resizeMode="contain"
            style={tw.style(GLOBAL_ICON_SIZE)}
            tintColor={GLOBAL_COLORS.quaternary.hex}
          />
        )}
      </Pressable>
    </View>
  );
};
