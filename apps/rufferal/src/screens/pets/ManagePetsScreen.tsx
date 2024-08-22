import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PetSpecies, RManagePets, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const ManagePetsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateCreatePet = (petSpecies: PetSpecies) =>
    navigation.navigate('Create Pet Details', { petSpecies });

  return (
    <RManagePets
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateCreatePet={navigateCreatePet}
      // navigateForward={navigateForward}
    />
  );
};
