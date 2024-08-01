import { observer } from 'mobx-react-lite';
import { Button, View } from 'react-native';
import { Link } from 'react-router-dom';
import { Counter } from '../../../components/store-testing/Counter';
import { RAccessTemplate } from '../templates';

export const RAbout = observer(
  ({
    mobile = false,
    navigation,
  }: {
    mobile?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigation?: any;
  }): React.ReactElement => {
    const Navs = () =>
      mobile ? (
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      ) : (
        <Link to="/">Home</Link>
      );

    return (
      <RAccessTemplate mobile={mobile}>
        <Counter />
        <View style={{ margin: 10 }} />
        <Navs />
      </RAccessTemplate>
    );
  }
);
