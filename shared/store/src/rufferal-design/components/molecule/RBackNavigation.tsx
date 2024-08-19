import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import tw from 'twrnc';

export const RBackNavigation = ({
  backNavigation,
  mobileBackIcon,
}: {
  backNavigation: () => void;
  mobileBackIcon?: React.JSX.Element;
}) => {
  return (
    <View>
      <Pressable onPress={backNavigation}>
        {mobileBackIcon || (
          <Image
            source={require('../../../assets/icons-512/arrow-left.png')}
            resizeMode="contain"
            style={tw`w-[24px] h-[24px]`}
            tintColor="#18181b"
          />
        )}
      </Pressable>
    </View>
  );
};
