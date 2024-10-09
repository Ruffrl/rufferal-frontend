export type FieldSize =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'extra-large';

export type FieldState = 'default' | 'errored' | 'disabled';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'transparent'
  | 'socialBlack'
  | 'socialWhite';

export type FieldOption = {
  id?: string;
  label?: string;
  value?: string;
};
