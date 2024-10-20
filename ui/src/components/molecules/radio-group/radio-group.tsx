import { ruffwind } from '@rufferal/tailwind';
import { FieldOption, FieldState, RadioGroupProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import { FieldHelper, FieldLabel, Radio } from '../../atoms';

export const RadioGroup = ({
  containerGap = `gap-${moderateScaleTW(8)}`,
  data,
  disabled,
  errorMessage,
  label,
  labelSize,
  onChange,
  optionsDirection = `flex-column`,
  optionsGap = `gap-${moderateScaleTW(8)}`,
  optionsYPadding,
  value,
}: RadioGroupProps) => {
  let state: FieldState = 'default';

  if (disabled) {
    state = 'disabled';
  } else if (errorMessage) {
    state = 'errored';
  }

  const handlePress = (item: FieldOption) => {
    if (item.id !== value?.id) {
      onChange(item);
    }
  };

  return (
    <View style={ruffwind.style(containerGap)}>
      {label && <FieldLabel text={label} state={state} size={labelSize} />}
      <View style={ruffwind.style(optionsDirection, optionsGap, optionsYPadding)}>
        {data.map((item) => {
          return (
            <Radio
              key={item.id}
              item={item}
              onPress={handlePress}
              selected={item.id === value?.id}
            />
          );
        })}
      </View>
      {errorMessage && <FieldHelper text={errorMessage} />}
    </View>
  );
};
