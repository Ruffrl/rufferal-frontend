import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RDashboard, ScreenProps } from '@rufferal-frontend/store';

export const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateForward = () => navigation.navigate('Create Profile Avatar');

  return (
    <RDashboard
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
