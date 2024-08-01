import { Button, Platform, View } from 'react-native';
import { Link } from 'react-router-dom';
import { RAllAccounts, RFormLogin } from '../organism';
import { RAccessTemplate } from '../templates';

export const RHome = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
}): React.ReactElement => {
  const web = Platform.OS === 'web';

  const Navs = () =>
    web ? (
      <Link to="/about">About</Link>
    ) : (
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    );

  return (
    <RAccessTemplate>
      <RAllAccounts />
      <View style={{ margin: 10 }} />
      <RFormLogin />
      <Navs />
    </RAccessTemplate>
  );
};
