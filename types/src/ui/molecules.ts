import { FieldInputProps, FieldOption, FieldSelectProps } from '..';

export interface InputAreaProps extends FieldInputProps {
  errorMessage?: string;
  label: string;
  maxCharacters?: number;
}

export interface InputProps extends FieldInputProps {
  errorMessage?: string;
  label: string;
  disabled?: boolean;
}

export type OtherOption = {
  component: JSX.Element;
  label: string;
};

export interface PhotoModalProps {
  handleModalDismiss: () => void;
  modalPresent: boolean;
}

export interface RadioGroupProps {
  data: FieldOption[];
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  onBlur?: () => void;
  onChange: (item: FieldOption) => void;
  value?: FieldOption;
}

export interface SelectProps extends FieldSelectProps<FieldOption> {
  errorMessage?: string;
  label: string;
  other?: OtherOption;
  disabled?: boolean;
}