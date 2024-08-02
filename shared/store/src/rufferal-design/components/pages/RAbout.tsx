import { observer } from 'mobx-react-lite';
import { Button, Platform, Text, View } from 'react-native';
import { Link } from 'react-router-dom';
import { RAccount, RAllAccounts, RCounter } from '../organism';
import { RAccessTemplate } from '../templates';

export const RAbout = observer(
  ({
    navigation,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigation?: any;
  }): React.ReactElement => {
    const web = Platform.OS === 'web';

    const Navs = () =>
      web ? (
        <Link to="/">Home</Link>
      ) : (
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      );

    return (
      <RAccessTemplate>
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
        <View
          style={{
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 2,
            width: '100%',
          }}
        >
          <Text style={{ margin: 10 }}>
            Testing get all users - authorization required
          </Text>
          <RAllAccounts />
        </View>
        <View
          style={{
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 2,
            width: '100%',
          }}
        >
          <Text style={{ margin: 10 }}>
            Testing get single user - authorization required
          </Text>
          <RAccount userId={1} />
        </View>
        <Navs />
      </RAccessTemplate>
    );
  }
);
