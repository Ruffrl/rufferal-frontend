import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  PetSpecies,
  RCreatePetCareplan,
  ScreenProps,
} from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const CreatePetCareplanScreen = ({ route }) => {
  const { petSpecies } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = (petSpecies: PetSpecies) =>
    navigation.navigate('Create Pet Personality', { petSpecies });
  const navigateCancel = () => navigation.navigate('Manage Pets');
  const navigateForward = () => navigation.navigate('Manage Pets');

  return (
    <RCreatePetCareplan
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
      petSpecies={petSpecies}
    />
  );
};
