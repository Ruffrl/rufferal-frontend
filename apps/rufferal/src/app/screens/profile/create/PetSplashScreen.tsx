import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { PetSplash } from '@rufferal/ui';

export const PetSplashScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return <PetSplash navigation={navigation} />;
};
