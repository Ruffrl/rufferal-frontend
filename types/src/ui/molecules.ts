import { FieldInputProps, FieldOption, FieldSelectProps } from '..';

export interface InputAreaProps extends InputProps {
  maxCharacters?: number;
}

export interface InputProps extends FieldInputProps {
  disabled?: boolean;
  errorMessage?: string;
  label: string;
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
  disabled?: boolean;
  errorMessage?: string;
  label: string;
  other?: OtherOption;
}
