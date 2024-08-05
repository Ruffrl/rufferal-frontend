import { Text } from 'react-native';
import { RFormLogin } from '../organism';
import { RAccessTemplate } from '../templates';

export const RHome = ({
  navigation,
  navigateAfterLogin,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
  navigateAfterLogin: () => void;
}): React.ReactElement => {
  return (
    <RAccessTemplate navigation={navigation}>
      <Text
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        Testing Login (also testing ReactHookForms and Backend Auth)
      </Text>
      <RFormLogin navigateAfterLogin={navigateAfterLogin} />
    </RAccessTemplate>
  );
};
