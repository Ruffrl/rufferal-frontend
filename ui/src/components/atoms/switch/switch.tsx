// import SwitchToggle from 'react-native-switch-toggle';
import * as RNSwitch from '@meksiabdou/react-native-switch';
import { ruffwind } from '@rufferal/tailwind';
import { moderateScale, moderateScaleTW } from '@rufferal/utils';
const SwitchToggle = RNSwitch.default;

interface SwitchProps {
  switchState: boolean;
  setSwitchState: () => void;
}

export const Switch = ({ switchState, setSwitchState }: SwitchProps) => {
  return (
    <SwitchToggle
      value={switchState}
      width={moderateScale(40)}
      onValueChange={setSwitchState}
      activeText="On"
      inActiveText="Off"
      circleSize={12}
      circleActiveColor="#FAF9FA"
      circleInActiveColor="#FAF9FA"
      backgroundActive="#9525CB"
      backgroundInActive="#C9C9C9"
      textStyle={ruffwind.style(
        `font-bodySemibold text-b1 text-center`,
        switchState ? `text-saltBox-50` : `text-iron-500`
      )}
      switchStyle={ruffwind.style(`
        w-${moderateScaleTW(40)}
        h-${moderateScaleTW(16)}`)}
    />
    // <SwitchToggle
    //   switchOn={switchState}
    //   onPress={setSwitchState}
    //   circleColorOff="#FAF9FA"
    //   circleColorOn="#FAF9FA"
    //   backgroundColorOn="#9525CB"
    //   backgroundColorOff="#C9C9C9"
    //   // SWITCH OFF
    //   backTextRight={!switchState ? 'Off' : undefined}
    //   textRightStyle={ruffwind.style(
    //     !switchState
    //       ? `font-bodySemibold
    //       text-b1
    //       text-center
    //       text-iron-500
    //       ml-${moderateScaleTW(4)}`
    //       : `hidden`
    //   )}
    //   rightContainerStyle={{ backgroundColor: 'pink', padding: 0 }}
    //   // SWITCH ON
    //   backTextLeft={switchState ? 'On' : undefined}
    //   textLeftStyle={ruffwind.style(
    //     switchState
    //       ? `font-bodySemibold
    //       text-b1
    //       text-center
    //       text-saltBox-50
    //       mr-${moderateScaleTW(4)}`
    //       : `hidden`
    //   )}
    //   leftContainerStyle={{ backgroundColor: 'aqua', padding: 0 }}
    //   containerStyle={{
    //     width: moderateScale(40),
    //     height: moderateScale(16),
    //     borderRadius: moderateScale(25),
    //     padding: moderateScale(4),
    //   }}
    //   circleStyle={{
    //     width: moderateScale(12),
    //     height: moderateScale(12),
    //     borderRadius: moderateScale(20),
    //     // transform: switchState ? [{ translateX: 0 }] : undefined,
    //     transform: [{ translateX: 1 }],
    //   }}
    //   // containerStyle={{
    //   //   width: moderateScale(40),
    //   //   height: moderateScale(16),
    //   //   borderRadius: moderateScale(25),
    //   //   padding: moderateScale(5),
    //   //   // paddingVertical: moderateScale(1),
    //   // }}
    //   // circleStyle={{
    //   //   width: moderateScale(12),
    //   //   height: moderateScale(12),
    //   //   borderRadius: moderateScale(20),
    //   // }}
    // />
  );
};
