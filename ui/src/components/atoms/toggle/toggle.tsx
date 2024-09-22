import { moderateScale } from '@rufferal/utils';
import SwitchToggle from 'react-native-switch-toggle';

interface ToggleProps {
  toggleState: boolean;
  setToggleState: () => void;
}

// 🚨🚨🚨 WARNING: SwitchToggle: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead. 🚨🚨🚨
// BLARG: TODO: Create custom Toggle (that can support "On"/"Off" text and replace this library here and in SwitchToggle atoms)
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
