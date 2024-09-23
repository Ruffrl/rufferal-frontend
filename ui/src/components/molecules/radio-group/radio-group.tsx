import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldLabel,
  FieldOption,
  FieldState,
  Radio,
} from '../../atoms';

export interface RadioGroupProps {
  data: FieldOption[];
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  onBlur?: () => void;
  onChange: (item: FieldOption) => void;
  value?: FieldOption;
}

export const RadioGroup = ({
  data,
  disabled,
  errorMessage,
  label,
  onChange,
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
    <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
      {label && <FieldLabel text={label} state={state} />}
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
      {errorMessage && <FieldHelper text={errorMessage} />}
    </View>
  );
};
