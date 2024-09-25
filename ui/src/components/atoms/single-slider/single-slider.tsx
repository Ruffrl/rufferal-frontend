import { Slider } from '@react-native-assets/slider';
import { ruffwind } from '@rufferal/tailwind';
import { SingleSliderProps } from '@rufferal/types';
import { moderateScale, moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

// 🚨🚨🚨 WARNING: When thumb is at extreme ends, it is cut off by padding/width 🚨🚨🚨
// BLARG: TODO: Create custom Slider (that can support Range behavior and replace this library here and in RangeSlider atoms)
export const SingleSlider = ({
  onChange,
  value,
}: SingleSliderProps) => {
  return (
    <View style={ruffwind`flex-row items-center`}>
      <View
        style={ruffwind`
          bg-electricViolet-600
          rounded-l-${moderateScaleTW(4)}
          h-${moderateScaleTW(8)}
          w-${moderateScaleTW(12)}`}
      />
      <Slider
        value={value || 3}
        minimumValue={1}
        maximumValue={5}
        step={1}
        style={ruffwind`flex-1 z-10`}
        // BLARG - convert from tailwind config
        minimumTrackTintColor={'#AC36E7'}
        maximumTrackTintColor={'#EFD6FE'}
        thumbTintColor={'#AC36E7'}
        trackHeight={moderateScale(8)}
        thumbSize={moderateScale(24)}
        onValueChange={onChange}
        trackStyle={ruffwind`rounded-0`}
      />
      <View
        style={ruffwind`
          bg-electricViolet-200
          rounded-r-${moderateScaleTW(4)}
          h-${moderateScaleTW(8)}
          w-${moderateScaleTW(12)}`}
      />
    </View>
  );
};
