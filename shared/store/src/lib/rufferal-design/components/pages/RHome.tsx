import { Button } from 'react-native';
import { Link } from 'react-router-dom';
import { RAccessTemplate } from '../templates';

export const RHome = ({
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
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    ) : (
      <Link to="/about">About</Link>
    );

  return (
    <RAccessTemplate mobile={mobile}>
      <Navs />
    </RAccessTemplate>
  );
};
