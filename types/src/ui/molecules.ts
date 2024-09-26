import {
  FieldInputProps,
  FieldOption,
  FieldSelectProps,
  SingleSliderProps,
  ToggleProps,
} from '..';

export interface InputAreaProps extends InputProps {
  maxCharacters?: number;
}

export interface InputProps extends FieldInputProps {
  disabled?: boolean;
  errorMessage?: string;
  label: string;
}

export interface InputPhotoProps {
  cameraNavPath: string;
  errorMessage?: string;
  label?: string;
  uri?: string;
  onChange: (uri: string) => void;
}

export interface InputSliderProps extends SingleSliderProps {
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  sliderLabels?: [string, string];
}

export interface CheckToggleProps extends ToggleProps {
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
  navPath: string;
  onChange: (uri: string) => void;
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
