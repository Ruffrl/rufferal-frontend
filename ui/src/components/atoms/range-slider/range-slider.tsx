import { RangeSlider as Slider } from '@react-native-assets/slider';
import { ruffwind } from '@rufferal/tailwind';
import { moderateScale, moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

interface RangeSliderProps {
  handleChange: (range: [number, number]) => void;
  range?: [number, number];
}

export const RangeSlider = ({ handleChange, range }: RangeSliderProps) => {
  return (
    <View style={ruffwind`flex-row items-center`}>
      <View
        style={ruffwind`
          bg-electricViolet-200
          rounded-l-${moderateScaleTW(4)}
          h-${moderateScaleTW(8)}
          w-${moderateScaleTW(12)}`}
      />
      <Slider
        range={range || [40, 160]}
        minimumValue={1}
        maximumValue={200}
        step={10}
        // BLARG - convert from tailwind config
        outboundColor={'#EFD6FE'}
        inboundColor={'#AC36E7'}
        thumbTintColor={'#AC36E7'}
        trackHeight={moderateScale(8)}
        thumbSize={moderateScale(24)}
        onValueChange={handleChange}
        trackStyle={ruffwind`rounded-0`}
        style={ruffwind`flex-1 z-10`}
        slideOnTap
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
