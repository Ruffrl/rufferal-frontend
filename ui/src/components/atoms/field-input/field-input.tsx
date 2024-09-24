import { ruffwind } from '@rufferal/tailwind';
import { FieldInputProps } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_SMALL,
  horizontalScaleTW,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, TextInput, View } from 'react-native';

export const FieldInput = ({
  onChange,
  onSubmit,
  placeholder,
  size = 'standard',
  state = 'default',
  ...inputProps
}: FieldInputProps) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  let width = `w-full`;
  switch (size) {
    case 'small':
      width = `w-${horizontalScaleTW(150)}`;
      break;
  }

  let stateStyle = `bg-white border-saltBox-200`;
  let textStyle = `text-balticSea-950`;
  // BLARG: TODO: Convert tailwind colors into an exportable module so we can access hex values direct as needed
  // colors.saltbox[700]
  let placeholderColor = '#695C6F';
  switch (state) {
    case 'errored':
      stateStyle = `bg-white border-red-300`;
      textStyle = `text-red-600`;
      placeholderColor = '#E8270E';
      break;
    case 'disabled':
      stateStyle = `bg-iron-200 border-iron-300`;
      textStyle = `text-iron-500`;
      placeholderColor = '#999999';
      break;
  }

  return (
    <View
      accessible={true}
      style={ruffwind.style(
        `border-solid 
        flex-row
        gap-${moderateScaleTW(4)}
        border-${moderateScaleTW(1)} 
        h-${moderateScaleTW(32)}
        px-${moderateScaleTW(16)}
        py-${moderateScaleTW(8)}
        rounded-${moderateScaleTW(8)}`,
        stateStyle,
        width
      )}
    >
      <TextInput
        {...inputProps}
        placeholder={placeholder || 'Select...'}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        editable={state !== 'disabled'}
        style={[
          !isMobile && { outlineStyle: 'none' },
          ruffwind.style(`font-body h-full flex-1 text-b2`, textStyle),
        ]}
        placeholderTextColor={placeholderColor}
      />
      {state === 'errored' && (
        <Image
          style={ruffwind.style(
            GLOBAL_ICON_SIZE_SMALL,
            'items-center justify-center'
          )}
          source={require('@rufferal/assets/src/icons/alert-triangle.png')}
        />
      )}
    </View>
  );
};
