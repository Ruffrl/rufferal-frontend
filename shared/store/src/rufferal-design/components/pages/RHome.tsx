import { Button, View } from 'react-native';
import { Link } from 'react-router-dom';
import { RAdminAccounts, RFormLogin } from '../organism';
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
      <RAdminAccounts />
      <View style={{ margin: 10 }} />
      <RFormLogin />
      <Navs />
    </RAccessTemplate>
  );
};
