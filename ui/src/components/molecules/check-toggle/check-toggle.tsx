import { ruffwind } from '@rufferal/tailwind';
import { CheckToggleProps, FieldState } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import { CheckLabel, FieldHelper, Toggle } from '../../atoms';

export const CheckToggle = ({
  disabled = false,
  errorMessage,
  label,
  // size = 'default',
  ...toggleProps
}: CheckToggleProps) => {
  let state: FieldState = 'default';

  if (disabled) {
    state = 'disabled';
  } else if (errorMessage) {
    state = 'errored';
  }

  return (
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      <View style={ruffwind`justify-between flex-row`}>
        <CheckLabel text={label} state={state} />
        {/* <Toggle state={state} size={size} {...toggleProps} /> */}
        <Toggle {...toggleProps} />
      </View>
      {errorMessage && <FieldHelper text={errorMessage} />}
    </View>
  );
};
