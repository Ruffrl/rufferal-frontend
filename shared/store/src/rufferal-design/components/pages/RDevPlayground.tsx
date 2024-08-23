import { Text, View } from 'react-native';
import tw from 'twrnc';
import { RCounter } from '../organism';
import { RPrototypeTemplate } from '../templates';

export const RDevPlayground = (): React.ReactElement => {
  return (
    <RPrototypeTemplate>
      <View style={tw`mb-[10px] border-[2px] border-black`}>
        <Text style={tw`m-[10px]`}>Testing (Mobx) Store</Text>
        <RCounter />
      </View>
    </RPrototypeTemplate>
  );
};
