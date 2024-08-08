import AsyncStorage from '@react-native-async-storage/async-storage';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { RFormEmailPassword } from '../organism';
import { RAccessTemplateOLD } from '../templates';
import tw from 'twrnc';

export const RHome = observer(
  ({
    navigateAfterLogin,
  }: {
    navigateAfterLogin?: () => void;
  }): React.ReactElement => {
    const [data, setData] = useState<string>();
    const [objectData, setObjectData] = useState<object>();

    const storeData = async (value: string) => {
      try {
        await AsyncStorage.setItem('test-data', value);
      } catch (e) {
        // saving error
        console.log('ERROR: ', e);
      }
    };

    const storeObjectData = async (value: object) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('test-object-data', jsonValue);
      } catch (e) {
        // saving error
        console.log('ERROR: ', e);
      }
    };

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('test-data');
        if (value !== null) {
          // value previously stored
          setData(value);
          return value;
        }
      } catch (e) {
        // error reading value
        console.log('ERROR: ', e);
      }
      return null;
    };

    const getObjectData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('test-object-data');
        // return jsonValue != null ? JSON.parse(jsonValue) : null;
        const parsedValue = jsonValue ? JSON.parse(jsonValue) : null;
        parsedValue && setObjectData(parsedValue);
        return parsedValue;
      } catch (e) {
        // error reading value
        console.log('ERROR: ', e);
      }
    };

    useEffect(() => {
      storeData('This be a test');
      storeObjectData({ hello: 'I am a test' });
      getData();
      getObjectData();
    }, []);

    return (
      <RAccessTemplateOLD>
        <Text style={tw`mt-[30px] mb-[30px]`}>
          Testing Async Storage
        </Text>
        <Text>{data}</Text>
        <Text>{JSON.stringify(objectData)}</Text>
        <RFormEmailPassword navigateAfterLogin={navigateAfterLogin} />
      </RAccessTemplateOLD>
    );
  }
);
