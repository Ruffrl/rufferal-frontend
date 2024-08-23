import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  PetSpecies,
  RCreatePetDetails,
  ScreenProps,
} from '@rufferal-frontend/store';
import { IconArrowBack, IconClose, IconPlus } from '../../assets';

export const CreatePetDetailsScreen = ({ route }) => {
  const { petSpecies } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Manage Pets');
  const navigateCancel = () => navigation.navigate('Manage Pets');
  const navigateForward = (petSpecies: PetSpecies) =>
    navigation.navigate('Create Pet Personality', { petSpecies });

  return (
    <RCreatePetDetails
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      mobilePlusIcon={<IconPlus/>}
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
      petSpecies={petSpecies}
    />
  );
};
