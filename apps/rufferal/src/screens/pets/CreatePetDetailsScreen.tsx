import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreatePetDetails, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const CreatePetDetailsScreen = ({ route }) => {
  const { petSpecies } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Pet Details');
  const navigateCancel = () => navigation.navigate('Manage Pets');
  const navigateForward = () => navigation.navigate('Create Pet Personality');

  return (
    <RCreatePetDetails
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
      petSpecies={petSpecies}
    />
  );
};
