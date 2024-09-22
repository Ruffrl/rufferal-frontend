import { moderateScale } from '@rufferal/utils';
import SwitchToggle from 'react-native-switch-toggle';

interface ToggleProps {
  toggleState: boolean;
  setToggleState: () => void;
}

export const Toggle = ({ toggleState, setToggleState }: ToggleProps) => {
  return (
    <SwitchToggle
      switchOn={toggleState}
      onPress={setToggleState}
      circleColorOff="#FAF9FA"
      circleColorOn="#FAF9FA"
      backgroundColorOn="#9525CB"
      backgroundColorOff="#BCB1C1"
      containerStyle={{
        width: moderateScale(28),
        height: moderateScale(16),
        borderRadius: moderateScale(25),
        padding: moderateScale(2),
      }}
      circleStyle={{
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(20),
      }}
    />
  );
};
