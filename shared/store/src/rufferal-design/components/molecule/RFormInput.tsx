import * as React from 'react';
import { useRef } from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import tw from 'twrnc';
import { FieldSize, RInput, RInputError, RLabel } from '../atom';

interface Props extends Omit<TextInputProps, 'onChange'> {
  error?: FieldError | undefined;
  formRef?: RefCallBack;
  isPassword?: boolean;
  label: string;
  labelStyle?: string;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
  onSubmit: () => Promise<void>;
  placeholder?: string;
  size?: FieldSize;
  onChange: ((text: string) => void);
}

export const RFormInput = ({
  error,
  formRef,
  isPassword = false,
  label,
  labelStyle,
  mobileIconHide,
  mobileIconView,
  onBlur,
  onChange,
  onSubmit,
  placeholder,
  size,
  value,
}: Props): React.ReactElement => {
  // Managing react hook forms and custom inputs
  const inputRef = formRef || useRef(null);

  return (
    <View style={tw`gap-1`}>
      <RLabel label={label} labelStyle={labelStyle} />
      <RInput
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder || label}
        size={size}
        value={value}
        onSubmit={onSubmit}
        isPassword={isPassword}
        mobileIconHide={mobileIconHide}
        mobileIconView={mobileIconView}
        error={error}
      />
      {isPassword &&
        error &&
        error.message === 'Password is a required field' && (
          <RInputError
            error={{ type: 'error', message: 'Password is a required field' }}
          />
        )}
      {!isPassword && error && <RInputError error={error} />}
    </View>
  );
};
