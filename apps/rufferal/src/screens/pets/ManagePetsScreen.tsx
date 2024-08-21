import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RManagePets, ScreenProps } from '@rufferal-frontend/store';

export const ManagePetsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateForward = () => navigation.navigate('Create Profile Avatar');

  return (
    <RManagePets
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
