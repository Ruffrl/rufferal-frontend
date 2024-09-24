import { ruffwind } from '@rufferal/tailwind';
import { FieldState, SelectProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import { FieldHelper, FieldLabel, FieldSelect } from '../../atoms';

export const Select = ({
  data,
  errorMessage,
  label,
  size = 'standard',
  other,
  disabled,
  ...selectProps
}: SelectProps) => {
  let state: FieldState = 'default';

  if (disabled) {
    state = 'disabled';
  } else if (errorMessage) {
    state = 'errored';
  }

  // Handle optional "Other" option
  if (other && Object.keys(other).length > 0) {
    data.push({
      id: 'other',
      label: other.label,
      value: other.label.toLowerCase(),
    });
  }

  return (
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      <FieldLabel text={label} state={state} />
      <FieldSelect
        data={data}
        state={state}
        size={size}
        other={other}
        {...selectProps}
      />
      {errorMessage ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <View style={ruffwind`h-${moderateScaleTW(12)}`} />
      )}
    </View>
  );
};
