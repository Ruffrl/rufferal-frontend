import { observer } from 'mobx-react-lite';
import { Button, Platform, View } from 'react-native';
import { Link } from 'react-router-dom';
import { RCounter } from '../organism';
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
        <RCounter />
        <View style={{ margin: 10 }} />
        <Navs />
      </RAccessTemplate>
    );
  }
);
