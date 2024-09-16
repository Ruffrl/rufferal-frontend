// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import {
//   PetSpecies,
//   RCreatePetPersonality,
//   ScreenProps,
// } from '@rufferal-frontend/store';
// import { IconArrowBack, IconClose } from '../../assets';

// export const CreatePetPersonalityScreen = ({ route }) => {
//   const { petSpecies } = route.params;
//   const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

//   const navigateBack = (petSpecies: PetSpecies) =>
//     navigation.navigate('Create Pet Details', { petSpecies });
//   const navigateCancel = () => navigation.navigate('Manage Pets');
//   const navigateForward = (petSpecies: PetSpecies) =>
//     navigation.navigate('Create Pet Careplan', { petSpecies });

//   return (
//     <RCreatePetPersonality
//       mobileBackIcon={<IconArrowBack />}
//       mobileCloseIcon={<IconClose />}
//       navigateBack={navigateBack}
//       navigateCancel={navigateCancel}
//       navigateForward={navigateForward}
//       petSpecies={petSpecies}
//     />
//   );
// };

import { CreatePetPersonality } from '@rufferal/ui';

export const CreatePetPersonalityScreen = () => {
  return <CreatePetPersonality />;
};