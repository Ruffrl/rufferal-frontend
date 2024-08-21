import { useState } from 'react';
import { Platform, Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAccountStore } from '../../../../store';
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

  // console.log(
  //   'BLARG String(AccountStore.bearerToken)',
  //   String(AccountStore.bearerToken)
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
          Authorization: String(observableAccountStore.bearerToken),
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
          <View
            key={account.id}
            style={tw`w-full flex flex-row justify-between items-center p-[8px] bg-[#ff1493]`}
          >
            <Text style={tw`text-[30px] font-bold`}>{account.id}</Text>
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
    <View style={tw`flex p-3 w-full items-center`}>
      <View style={tw`mt-[10px] mb-[10px] w-[60%]`}>
        <RButton
          title={pressed ? 'Close all users' : 'Get all users'}
          onPress={() => {
            setPressed((prev) => !prev);
            !pressed && handleGetAccounts();
          }}
        />
      </View>
      {!error && pressed && (
        <View style={tw`w-full`}>
          <DisplayAccounts />
        </View>
      )}
      {error && (
        <View style={tw`w-full`}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};
