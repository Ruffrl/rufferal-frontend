import { RBottomSheet } from '@rufferal-frontend/store';
import { StatusBar } from 'react-native';

export const ManagePetsScreen = () => {
  return (
    <>
      <RBottomSheet />
      <StatusBar translucent={true} />
    </>
  );
};
