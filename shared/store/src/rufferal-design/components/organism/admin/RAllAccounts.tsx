import { useContext, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AuthStoreContext } from '../../../../store';
import { RButton } from '../../atom';

// type AllUsersResponse = {
//   data: {
//     id: number;
//     type: 'user';
//     attributes: User;
//   };
// };

export const RAllAccounts = () => {
  /* STATE */
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>();

  const authStore = useContext(AuthStoreContext);
  // console.log(
  //   'BLARG String(authStore.bearerToken)',
  //   String(authStore.bearerToken)
  // );

  const handleGetAccounts = async () => {
    const url =
      Platform.OS === 'android'
        ? 'http://10.0.2.2:5000/admin/users'
        : 'http://localhost:5000/admin/users';
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
        const error = await response.json();
        throw new Error(error.message);
      }
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      // console.log('BLARG err: ', err);
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const DisplayAccounts = () => {
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.map((account: any) => {
        return (
          <View key={account.id} style={styles.item}>
            <Text style={styles.title}>{account.id}</Text>
            <Text>{account.attributes.forename}</Text>
            <Text>{account.attributes.surname}</Text>
            <Text>{account.attributes.verified ? 'true' : 'false'}</Text>
            <Text>{account.attributes.avatar}</Text>
            <Text>{account.attributes.species}</Text>
            <Text>{account.attributes.email}</Text>
          </View>
        );
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <RButton
          title={pressed ? 'Close all users' : 'Get all users'}
          onPress={() => {
            setPressed((prev) => !prev);
            !pressed && handleGetAccounts();
          }}
        />
      </View>
      {!error && pressed && (
        <View style={styles.display}>
          <DisplayAccounts />
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
