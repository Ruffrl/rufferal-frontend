import { useState } from 'react';
import { Platform, Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAuthStore, User } from '../../../../store';
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
          Authorization: String(observableAuthStore.bearerToken),
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
          <View
            key={account.id}
            style={tw`w-full flex flex-row justify-between items-center p-[8px] bg-[#ff1493]`}
          >
            <Text style={tw`text-[30px] font-bold`}>{account.id}</Text>
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
    <View style={tw`flex p-3 w-full items-center`}>
      <View style={tw`mt-[10px] mb-[10px] w-[60%]`}>
        <RButton
          title={pressed ? 'Close Account' : 'Get Account'}
          onPress={() => {
            setPressed((prev) => !prev);
            !pressed && handleAccount();
          }}
        />
      </View>
      {!error && pressed && (
        <View style={tw`w-full`}>
          <DisplayAccount />
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
