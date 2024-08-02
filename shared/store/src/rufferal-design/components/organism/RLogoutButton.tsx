import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useContext, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { AuthStoreContext } from '../../../store';
import { FormErrorProps, RButton, RFormError } from '../atom';

export const RLogoutButton = observer(
  ({ id }: { id: number }): React.ReactElement => {
    /* STATE */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    const userStore = useContext(AuthStoreContext);

    /* BEHAVIORS */
    const handleLogout = async () => {
      // Handle form submission
      //  DELETE     /sessions/:id
      const url =
        Platform.OS === 'android'
          ? `http://10.0.2.2:5000/sessions/${id}`
          : `http://localhost:5000/sessions/${id}`;

      setLoading(true);
      setError('');

      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: String(userStore.bearerToken),
          },
        });

        if (!response.ok) {
          const error: FormErrorProps = await response.json();
          throw new Error(error.error);
        }

        const result = await response.json();
        userStore.revokeAuth();
        console.log('result is: ', JSON.stringify(result, null, 4));
        // BLARG NAVIGATE
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    return (
      <View style={{ width: '100%' }}>
        <Text>{'\n'}</Text>
        {error && <RFormError error={error} />}
        <Text>{'\n'}</Text>
        <RButton title="Log Out" onPress={handleLogout} loading={loading} />
      </View>
    );
  }
);
