import { observer } from 'mobx-react-lite';
import { Button, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { Counter } from '../../../components/store-testing/Counter';
import { RAccessTemplate } from '../templates';

export const RAbout = observer(
  ({
    mobile = false,
    navigation,
  }: {
    mobile?: boolean;
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
          // <Text>About</Text>
      );

    return (
      <RAccessTemplate mobile={mobile}>
        <Text>About</Text>
        <Counter />
        <Navs />
      </RAccessTemplate>
    );
  }
);
