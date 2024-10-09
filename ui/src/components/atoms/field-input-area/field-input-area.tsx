import { ruffwind } from '@rufferal/tailwind';
import { FieldInputProps } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_SMALL,
  horizontalScaleTW,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, TextInput, View } from 'react-native';

export const FieldInputArea = ({
  onChange,
  onSubmit,
  placeholder,
  size = 'default',
  state = 'default',
  value,
  ...inputProps
}: FieldInputProps) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  let width = `w-full`;
  switch (size) {
    case 'small':
      width = `w-${horizontalScaleTW(150)}`;
      break;
  }

  let stateStyle = `bg-white border-saltBox-100`;
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
        border-${moderateScaleTW(1)} 
        h-${moderateScaleTW(84)}
        gap-${moderateScaleTW(4)}
        px-${moderateScaleTW(8)}
        py-${moderateScaleTW(4)}
        rounded-${moderateScaleTW(4)}`,
        stateStyle,
        width
      )}
    >
      <TextInput
        {...inputProps}
        value={value || ''}
        placeholder={placeholder || 'Add notes here...'}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        editable={state !== 'disabled'}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        style={[
          !isMobile && { outlineStyle: 'none' },
          ruffwind.style(`font-body flex-1 h-full text-b2`, textStyle),
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
