// import * as React from 'react';

import { Slider } from '@react-native-assets/slider';
import { GLOBAL_COLORS, moderateScale, verticalScale } from '../../utils';

export const RSingleSlider = ({
  value,
  handleChange,
}: {
  value?: number;
  handleChange: (value: number) => void;
  }) => {
  return (
    <Slider
      value={value || 3}
      minimumValue={1}
      maximumValue={5}
      step={1}
      minimumTrackTintColor={GLOBAL_COLORS.electricViolet600.hex}
      maximumTrackTintColor={GLOBAL_COLORS.electricViolet200.hex}
      thumbTintColor={GLOBAL_COLORS.electricViolet600.hex}
      trackHeight={verticalScale(8)}
      thumbSize={moderateScale(24)}
      onValueChange={handleChange}
    />
  );
};

/* DOCUMENTATION */

/*
 * BLARG - VENDOR ERRORS (consider making a component from scratch when you have time)
 * focusable is deprecated.
 * props.pointerEvents is deprecated. Use style.pointerEvents
 * accessibilityRole is deprecated. Use role.
 * accessibilityLabel is deprecated. Use aria-label
 * ResponderView.js:100 [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/feature/5093566007214080
(anonymous)	@	
 */

// <Slider
//   value={0} // set the current slider's value
//   minimumValue={0} // Minimum value
//   maximumValue={1} // Maximum value
//   step={0} // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
//   minimumTrackTintColor="grey" // The track color before the current value
//   maximumTrackTintColor="grey" // The track color after the current value
//   thumbTintColor="darkcyan" // The color of the slider's thumb
//   thumbStyle={undefined} // Override the thumb's style
//   trackStyle={undefined} // Override the tracks' style
//   minTrackStyle={undefined} // Override the tracks' style for the minimum range
//   maxTrackStyle={undefined} // Override the tracks' style for the maximum range
//   vertical={false} // If true, the slider will be drawn vertically
//   inverted={false} // If true, min value will be on the right, and max on the left
//   enabled={true} // If false, the slider won't respond to touches anymore
//   trackHeight={4} // The track's height in pixel
//   thumbSize={15} // The thumb's size in pixel
//   thumbImage={undefined} // An image that would represent the thumb
//   slideOnTap={true} // If true, touching the slider will update it's value. No need to slide the thumb.
//   onValueChange={undefined} // Called each time the value changed. The type is (value: number) => void
//   onSlidingStart={undefined} // Called when the slider is pressed. The type is (value: number) => void
//   onSlidingComplete={undefined} // Called when the press is released. The type is (value: number) => void
//   CustomThumb={undefined} // Provide your own component to render the thumb. The type is a component: ({ value: number }) => JSX.Element
//   CustomMark={undefined} // Provide your own component to render the marks. The type is a component: ({ value: number; active: boolean }) => JSX.Element ; value indicates the value represented by the mark, while active indicates wether a thumb is currently standing on the mark
//   {...props} // Add any View Props that will be applied to the container (style, ref, etc)
// />
