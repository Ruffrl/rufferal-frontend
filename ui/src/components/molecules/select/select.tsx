import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldLabel,
  FieldOption,
  FieldSelect,
  FieldSelectProps,
  FieldState,
} from '../../atoms';

export type OtherOption = {
  component: JSX.Element;
  label: string;
};
export interface SelectProps extends FieldSelectProps<FieldOption> {
  errorMessage?: string;
  label: string;
  other?: OtherOption;
  disabled?: boolean;
}

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
