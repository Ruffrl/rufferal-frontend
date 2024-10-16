export type FieldSize =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge';

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
