import { Button, Platform, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { RFormLogin } from '../organism';
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
      <Text
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        Testing ReactHookForms and Backend Auth
      </Text>
      <RFormLogin />
      <Text style={{ marginTop: 30, marginBottom: 10 }}>
        ⬇️ Protected Route ⬇️
      </Text>
      <Navs />
    </RAccessTemplate>
  );
};
