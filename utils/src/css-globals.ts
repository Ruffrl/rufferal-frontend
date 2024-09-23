import tw from 'twrnc';
import { moderateScaleTW } from './dimensions';

/* SIZES */
export const GLOBAL_X_PADDING = 16;
export const GLOBAL_Y_PADDING = 16;

export const GLOBAL_MIN_PRESS_SIZE = tw`
  h-${moderateScaleTW(48)} 
  w-${moderateScaleTW(48)} 
`;
export const GLOBAL_ICON_SIZE_LARGE = tw`
  h-${moderateScaleTW(24)} 
  w-${moderateScaleTW(24)} 
`;
export const GLOBAL_ICON_SIZE = tw`
  h-${moderateScaleTW(20)} 
  w-${moderateScaleTW(20)} 
`;
export const GLOBAL_ICON_SIZE_MEDIUM = tw`
  h-${moderateScaleTW(18)} 
  w-${moderateScaleTW(18)} 
`;
export const GLOBAL_ICON_SIZE_MEDIUM_SMALL = tw`
  h-${moderateScaleTW(16)} 
  w-${moderateScaleTW(16)} 
`;
export const GLOBAL_ICON_SIZE_SMALL = tw`
  h-${moderateScaleTW(14)} 
  w-${moderateScaleTW(14)} 
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
