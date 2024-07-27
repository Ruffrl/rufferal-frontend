import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
// BLARG (TODO) - how do I update this so the design library can call itself with @ as well
import { RButton } from '../../rufferal-design/system';

export const GetUser = (): React.JSX.Element => {
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    id: '',
    email: '',
    forename: '',
    surname: '',
  });
  const [error, setError] = useState<any>();

  const url = 'http://localhost:3000/admin/users';

  const handleGetUser = async () => {
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

  const DisplayUser = () => {
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      <View key={data.id} style={styles.item}>
        <Text style={styles.title}>{data.id}</Text>
        <Text>{data.forename}</Text>
        <Text>{data.surname}</Text>
        <Text>{data.email}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value="dasd" placeholder="Enter ID" />
      <View style={styles.button}>
        <RButton
          title={pressed ? 'Close Users' : 'Get Users'}
          onPress={() => {
            setPressed((prev) => !prev);
            !pressed && handleGetUser();
          }}
        />
      </View>
      {pressed && (
        <View style={styles.display}>
          <DisplayUser />
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
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '60%',
    borderColor: 'black',
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
