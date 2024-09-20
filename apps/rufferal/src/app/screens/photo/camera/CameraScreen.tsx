import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Camera } from '@rufferal/ui';

export const CameraScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return <Camera />;
};
