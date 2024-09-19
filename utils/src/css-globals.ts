import tw from 'twrnc';
// import { moderateScaleTW, verticalScaleTW } from '.';
import { verticalScaleTW } from './dimensions';

/* SIZES */
export const GLOBAL_X_PADDING = 16;
export const GLOBAL_Y_PADDING = 16;

export const GLOBAL_MIN_PRESS_SIZE = tw`
  h-${verticalScaleTW(48)} 
  w-${verticalScaleTW(48)} 
`;
export const GLOBAL_MIN_PRESS_HEIGHT = tw`h-${verticalScaleTW(48)}`;
// export const GLOBAL_MIN_PRESS_SIZE = tw`
//   h-${moderateScaleTW(48)}
//   w-${moderateScaleTW(48)}
// `;
export const GLOBAL_ICON_SIZE_LARGE = tw`
  h-${verticalScaleTW(24)} 
  w-${verticalScaleTW(24)} 
`;
export const GLOBAL_ICON_SIZE = tw`
  h-${verticalScaleTW(20)} 
  w-${verticalScaleTW(20)} 
`;
export const GLOBAL_ICON_SIZE_MEDIUM = tw`
  h-${verticalScaleTW(18)} 
  w-${verticalScaleTW(18)} 
`;
export const GLOBAL_ICON_SIZE_MEDIUM_SMALL = tw`
  h-${verticalScaleTW(16)} 
  w-${verticalScaleTW(16)} 
`;
export const GLOBAL_ICON_SIZE_SMALL = tw`
  h-${verticalScaleTW(14)} 
  w-${verticalScaleTW(14)} 
`;
// export const GLOBAL_ICON_SIZE = tw`
//   h-${moderateScaleTW(24)}
//   w-${moderateScaleTW(24)}
// `;

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
export const GLOBAL_PROTOTYPE_COLORS = {
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
  successTertiary: { hex: '#a7f3d0', tw: 'emerald-200' },
  /* YELLOWS */
  warning: { hex: '#fde047', tw: 'yellow-300' },
  warningSecondary: { hex: '#eab308', tw: 'yellow-500' },
  /* NEUTRALS */
  white: { hex: '#fff', tw: 'white' },
  blue: { hex: '#1d4ed8', tw: 'blue-700' },
  black: { hex: '#000', tw: 'black' },
};

export const GLOBAL_COLORS = {
  /* PRIMARY COLOR */
  electricViolet50: { hex: '#fbf5ff', usage: undefined },
  electricViolet100: { hex: '#f6e8ff', usage: 'primary:surface' },
  electricViolet200: { hex: '#efd6fe', usage: undefined },
  electricViolet300: { hex: '#e2b5fd', usage: 'primary:border' },
  electricViolet400: { hex: '#d086fa', usage: undefined },
  electricViolet500: { hex: '#bf5bf4', usage: undefined },
  electricViolet600: { hex: '#ac37e6', usage: undefined },
  electricViolet700: { hex: '#9525cb', usage: 'primary:main' },
  electricViolet800: { hex: '#7d24a5', usage: undefined },
  electricViolet900: { hex: '#671e85', usage: 'primary:hover' },
  electricViolet1000: { hex: '#480962', usage: 'primary:pressed' },
  /* SECONDARY COLOR */
  canary50: { hex: '#fdffe5', usage: 'secondary:surface' },
  canary100: { hex: '#f9ffc7', usage: undefined },
  canary200: { hex: '#f1ff95', usage: 'secondary:focus' },
  canary300: { hex: '#e3ff57', usage: 'secondary:main' },
  canary400: { hex: '#d1f625', usage: undefined },
  canary500: { hex: '#b2dd05', usage: 'secondary:border' },
  canary600: { hex: '#8ab100', usage: 'secondary:hover' },
  canary700: { hex: '#688605', usage: undefined },
  canary800: { hex: '#53690b', usage: 'secondary:pressed' },
  canary900: { hex: '#45590e', usage: undefined },
  canary1000: { hex: '#243201', usage: undefined },
  /* TERTIARY COLOR */
  mobster50: { hex: '#faf9fa', usage: undefined },
  mobster100: { hex: '#f3f2f5', usage: undefined },
  mobster200: { hex: '#e8e4ea', usage: undefined },
  mobster300: { hex: '#d5ced9', usage: undefined },
  mobster400: { hex: '#bcb1c1', usage: undefined },
  mobster500: { hex: '#9f90a5', usage: undefined },
  mobster600: { hex: '#7f7086', usage: undefined },
  mobster700: { hex: '#695c6f', usage: undefined },
  mobster800: { hex: '#574c5c', usage: undefined },
  mobster900: { hex: '#4b424d', usage: undefined },
  mobster1000: { hex: '#2b242e', usage: undefined },
  /* ALERT COLOR */
  alertMain: { hex: '#e8270e', usage: 'alert:main' },
  alertSurface: { hex: '#fff3ed', usage: 'alert:surface' },
  alertBorder: { hex: '#fdc5ab', usage: 'alert:border' },
  alertHover: { hex: '#cf1e1e', usage: 'alert:hover' },
  alertPressed: { hex: '#991613', usage: 'alert:pressed' },
  alertFocus: { hex: '#fc9c75', usage: 'alert:focus' },
  /* SUCCESS COLOR */
  successMain: { hex: '#42b319', usage: 'success:main' },
  successSurface: { hex: '#f0fde8', usage: 'success:surface' },
  successBorder: { hex: '#dcfacd', usage: 'success:border' },
  successHover: { hex: '#359e12', usage: 'success:hover' },
  successPressed: { hex: '#265f15', usage: 'success:pressed' },
  successFocus: { hex: '#dcfacd', usage: 'success:focus' },
  /* WARNING COLOR */
  warningMain: { hex: '#fdd512', usage: 'warning:main' },
  warningSurface: { hex: '#fefde8', usage: 'warning:surface' },
  warningBorder: { hex: '#fff489', usage: 'warning:border' },
  warningHover: { hex: '#ecbb06', usage: 'warning:hover' },
  warningPressed: { hex: '#a36605', usage: 'warning:pressed' },
  warningFocus: { hex: '#fffcc2', usage: 'warning:focus' },
  /* INFO COLOR */
  infoMain: { hex: '#326cfb', usage: 'info:main' },
  infoSurface: { hex: '#e5edff', usage: 'info:surface' },
  infoBorder: { hex: '#82a4f9', usage: 'info:border' },
  infoHover: { hex: '#3f66c8', usage: 'info:hover' },
  infoPressed: { hex: '#142b63', usage: 'info:pressed' },
  infoFocus: { hex: '#b4c9ff', usage: 'info:focus' },
  /* NEUTRAL COLOR */
  white: { hex: '#fff', usage: undefined },
  black: { hex: '#000', usage: undefined },
};
