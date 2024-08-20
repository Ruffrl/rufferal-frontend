import tw from 'twrnc';
import { moderateScaleTW } from '.';

/* SIZES */
export const GLOBAL_X_PADDING = 16;
export const GLOBAL_Y_PADDING = 24;

export const GLOBAL_MIN_PRESS_SIZE = tw`
  h-${moderateScaleTW(48)} 
  w-${moderateScaleTW(48)} 
`;
export const GLOBAL_ICON_SIZE = tw`
  h-${moderateScaleTW(24)} 
  w-${moderateScaleTW(24)} 
`;

/* SHADOWS */
// BLARG - consider package for easier management of shadows:https://github.com/879479119/react-native-shadow
export const GLOBAL_WEB_SHADOW = { boxShadow: '4px 4px 0px 0px #d4d4d8' };

export const GLOBAL_IOS_SHADOW = {
  shadowColor: '#d4d4d8',
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 0,
};

export const GLOBAL_ANDROID_SHADOW = { elevation: 30, shadowColor: '#000' };

/* COLORS */
export const GLOBAL_COLORS = {
  /* SLATE GRAY */
  primary: { hex: '#6b7280', tw: 'gray-500' },
  /* LIGHT SLATE GRAY */
  secondary: { hex: '#cbd5e1', tw: 'slate-200' },
  /* DARK GRAY */
  tertiary: { hex: '#18181b', tw: 'zinc-900' },
  /* GRAY (Icon tints) */
  quaternary: { hex: '#71717a', tw: 'zinc-500' },
  /* LIGHT GRAY */
  disabled: { hex: '#d4d4d8', tw: 'zinc-300' },
  /* REDS */
  error: { hex: '#ef4444', tw: 'red-500' },
  errorSecondary: { hex: '#b91c1c', tw: 'red-700' },
  /* GREENS */
  success: { hex: '#22c55e', tw: 'green-500' },
  successSecondary: { hex: '#15803d', tw: 'green-700' },
  /* YELLOWS */
  warning: { hex: '#fde047', tw: 'yellow-300' },
  warningSecondary: { hex: '#eab308', tw: 'yellow-500' },
  /* NEUTRALS */
  white: { hex: '#fff', tw: 'white' },
  black: { hex: '#000', tw: 'black' },
};
