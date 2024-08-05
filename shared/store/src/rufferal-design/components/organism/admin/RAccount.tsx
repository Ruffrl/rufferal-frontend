import { useContext, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AuthStoreContext, User } from '../../../../store';
import { RButton } from '../../atom';

type AccountResponse = {
  id: number;
  type: 'user';
  attributes: User;
};

export const RAccount = ({ userId }: { userId: number }) => {
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<AccountResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<string>();

  const authStore = useContext(AuthStoreContext);

  const url =
    Platform.OS === 'android'
      ? `http://10.0.2.2:5000/admin/users/${userId}`
      : `http://localhost:5000/admin/users/${userId}`;

  const handleAccount = async () => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: String(authStore.bearerToken),
        },
      });

      if (!response.ok) {
        // console.log(
        //   'BLARG inside throw: ',
        //   `Error! status: ${response.status}`
        // );
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      // console.log('BLARG result', result);
      setAccount(result.data);
    } catch (err) {
      // console.log('BLARG err: ', err);
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const DisplayAccount = () => {
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      <View>
        {account?.id && (
          <View key={account.id} style={styles.item}>
            <Text style={styles.title}>{account.id}</Text>
            <Text>{account.attributes.forename}</Text>
            <Text>{account.attributes.surname}</Text>
            <Text>{account.attributes.verified ? 'true' : 'false'}</Text>
            <Text>
              {account.attributes.avatar
                ? account.attributes.avatar
                : 'No avatar uploaded'}
            </Text>
            <Text>{account.attributes.species}</Text>
            <Text>{account.attributes.email}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <RButton
          title={pressed ? 'Close Account' : 'Get Account'}
          onPress={() => {
            setPressed((prev) => !prev);
            !pressed && handleAccount();
          }}
        />
      </View>
      {!error && pressed && (
        <View style={styles.display}>
          <DisplayAccount />
        </View>
      )}
      {error && (
        <View style={styles.display}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: '60%',
  },
  display: {
    width: '100%',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'deeppink',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
