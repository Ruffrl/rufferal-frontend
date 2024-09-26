import { ruffwind } from '@rufferal/tailwind';
import { FieldState, InputSliderProps } from '@rufferal/types';
import { capitalize, moderateScaleTW } from '@rufferal/utils';
import { Text, View } from 'react-native';

import { FieldHelper, FieldLabel, SingleSlider } from '../../atoms';

export const InputSlider = ({
  disabled = false,
  errorMessage,
  label,
  sliderLabels,
  ...sliderProps
}: InputSliderProps) => {
  let state: FieldState = 'default';

  if (disabled) {
    state = 'disabled';
  } else if (errorMessage) {
    state = 'errored';
  }
  
  return (
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      {label && <FieldLabel text={label} state={state} />}
      <SingleSlider {...sliderProps} />
      {sliderLabels && (
        <View style={ruffwind`flex-row justify-between`}>
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-saltBox-700 text-left`}
          >
            {capitalize(sliderLabels[0])}
          </Text>
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-saltBox-700 text-right`}
          >
            {capitalize(sliderLabels[1])}
          </Text>
        </View>
      )}
      {errorMessage && <FieldHelper text={errorMessage} />}
    </View>
  );
};
