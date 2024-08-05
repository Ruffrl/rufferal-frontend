import { observer } from 'mobx-react-lite';
import { Text } from 'react-native';
import { RFormLogin } from '../organism';
import { RAccessTemplate } from '../templates';

export const RHome = observer(
  ({
    navigateAfterLogin,
  }: {
    navigateAfterLogin?: () => void;
  }): React.ReactElement => {
    return (
      <RAccessTemplate>
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
  }
);
