import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// BLARG (TODO) - how do I update this so the design library can call itself with @ as well
import { RButton } from '../../rufferal-design/system';

export const GetUsers = () => {
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>();

  const url = 'http://localhost:3000/admin/users';

  const handleGetUsers = async () => {
    setLoading(true);

    try {
      //   const response = await fetch('http://localhost:3000/admin/users/1', {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      console.log('error is: ', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const DisplayUsers = () => {
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      data.map((user: any) => {
        return (
          <View key={user.id} style={styles.item}>
            <Text style={styles.title}>{user.id}</Text>
            <Text>{user.forename}</Text>
            <Text>{user.surname}</Text>
            <Text>{user.email}</Text>
          </View>
        );
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <RButton
          title={pressed ? 'Close Users' : 'Get All Users'}
          onPress={() => {
            setPressed((prev) => !prev);
            !pressed && handleGetUsers();
          }}
        />
      </View>
      {pressed && (
        <View style={styles.display}>
          <DisplayUsers />
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
