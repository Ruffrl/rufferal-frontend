import * as RNSwitch from '@meksiabdou/react-native-switch';
import { ruffwind } from '@rufferal/tailwind';
import { moderateScale, moderateScaleTW } from '@rufferal/utils';
import { useCallback } from 'react';
const SwitchToggle = RNSwitch.default;

interface SwitchProps {
  switchState: boolean;
  setSwitchState: () => void;
}

export const Switch = ({ switchState, setSwitchState }: SwitchProps) => {
  const handleState = useCallback(() => {
    setSwitchState();
  }, [setSwitchState]);

  return (
    <SwitchToggle
      value={switchState}
      width={moderateScale(40)}
      onValueChange={handleState}
      activeText="On"
      inActiveText="Off"
      circleSize={moderateScale(12)}
      circleActiveColor="#FAF9FA"
      circleInActiveColor="#FAF9FA"
      backgroundActive="#9525CB"
      backgroundInActive="#C9C9C9"
      switchPaddingLeft={moderateScale(4)}
      switchPaddingRight={moderateScale(4)}
      textStyle={ruffwind.style(
        `font-bodySemibold text-b1 text-center m-0`,
        switchState ? `text-saltBox-50 mr-${moderateScaleTW(4)}` : `text-iron-500 ml-${moderateScaleTW(4)}`
      )}
      switchStyle={ruffwind.style(`
        w-${moderateScaleTW(40)}
        h-${moderateScaleTW(16)}`)}
    />
  );
};
