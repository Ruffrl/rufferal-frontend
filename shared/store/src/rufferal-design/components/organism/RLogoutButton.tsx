import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { observableAuthStore } from '../../../store';
import { RButton, RFormError } from '../atom';
import tw from 'twrnc';

export const RLogoutButton = observer(
  ({
    id,
    navigateAfterLogout,
  }: {
    id: number;
    navigateAfterLogout?: () => void;
  }): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    /* BEHAVIORS */
    const handleLogout = async () => {
      // Handle form submission
      setLoading(true);
      setError('');
      console.log(`Logging out user ${id}`);
      observableAuthStore.revokeAuth();
      // Web navigation
      navigateAfterLogout?.();
      setLoading(false);

      //  DELETE     /sessions/:id
      // BLARG - after I update backend with access and refresh tokens, a whitelist, and new behavior for how to handle login and logout - make changes
      // const url =
      //   Platform.OS === 'android'
      //     ? `http://10.0.2.2:5000/sessions/${id}`
      //     : `http://localhost:5000/sessions/${id}`;
      // try {
      //   const response = await fetch(url, {
      //     method: 'DELETE',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //       Authorization: String(observableAuthStore.bearerToken),
      //     },
      //   });

      //   if (!response.ok) {
      //     const error: FormErrorProps = await response.json();
      //     throw new Error(error.error);
      //   }

      //   const result = await response.json();
      //   observableAuthStore.revokeAuth();
      //   console.log('result is: ', JSON.stringify(result, null, 4));
      //   // BLARG NAVIGATE
      // } catch (err) {
      //   setError(String(err));
      // } finally {
      //   setLoading(false);
      // }
    };

    return (
      <View style={tw`w-full`}>
        {error && <RFormError error={error} />}
        <RButton title="Log Out" onPress={handleLogout} loading={loading} />
      </View>
    );
  }
);
