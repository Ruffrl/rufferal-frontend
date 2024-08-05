import { Text, View } from 'react-native';
import { RCounter } from '../organism';
import { RAccessTemplate } from '../templates';

export const RAbout = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
}): React.ReactElement => {
  return (
    <RAccessTemplate navigation={navigation}>
      <View
        style={{
          marginBottom: 10,
          borderColor: 'black',
          borderWidth: 2,
          width: '100%',
        }}
      >
        <Text style={{ margin: 10 }}>Testing (Mobx) Store</Text>
        <RCounter />
      </View>
    </RAccessTemplate>
  );
};
