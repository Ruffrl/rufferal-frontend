export type FieldSize = 'standard' | 'standard-short' | 'small' | 'small-short';

export type FieldState = 'default' | 'errored' | 'disabled';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'transparent'
  | 'socialBlack'
  | 'socialWhite';

export type FieldOption = {
  id: string;
  label: string;
  value: string;
};
