import { Button, Text } from 'react-native';
import { RAccessTemplate } from '../templates';
import { Link } from 'react-router-dom';

export const RHome = ({
  mobile = false,
  navigation,
}: {
  mobile?: boolean;
  navigation?: any;
}): React.ReactElement => {
  const Navs = () =>
    mobile ? (
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    ) : (
      <Link to="/about">About</Link>
      // <Text>About</Text>
    );

  return (
    <RAccessTemplate mobile={mobile}>
      <Text>Home</Text>
      <Navs />
    </RAccessTemplate>
  );
};
