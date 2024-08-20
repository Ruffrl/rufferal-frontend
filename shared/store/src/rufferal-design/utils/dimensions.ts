// https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const GUIDELINE_WIDTH = 375;
const GUIDELINE_HEIGHT = 812;

/* USAGE
 * width
 * marginLeft
 * marginRight
 * marginHorizontal
 * marginX
 * paddingLeft
 * paddingRight
 * paddingHorizontal
 * paddingX
 * etc...
 */
// const horizontalScale = (designedPixelSize: number) => {
//   const calc = (width / GUIDELINE_WIDTH) * designedPixelSize;
//   return Math.trunc(calc * 100) / 100;
// };
const horizontalScale = (designedPixelSize: number) =>
  (width / GUIDELINE_WIDTH) * designedPixelSize;

// Returns in Tailwind "arbitrary values" formatting of `[<pixelSize>px]`
const horizontalScaleTW = (designedPixelSize: number) => {
  return `[${horizontalScale(designedPixelSize)}px]`;
};

/* USAGE
 * height
 * marginTop
 * marginBottom
 * marginVertical
 * marginY
 * line-height
 * paddingTop
 * paddingBottom
 * paddingVertical
 * paddingY
 * etc...
 */
const verticalScale = (designedPixelSize: number) =>
  (height / GUIDELINE_HEIGHT) * designedPixelSize;

// Returns in Tailwind "arbitrary values" formatting of `[<pixelSize>px]`
const verticalScaleTW = (designedPixelSize: number) => {
  return `[${verticalScale(designedPixelSize)}px]`;
};

/* USAGE
 * font-size
 * borderRadius
 * etc...
 */

// designedPixelSize == 16px
// horizontalScale(designedPixelSize ==
// (1200 / 375) * designedPixelSize; == 16px
const moderateScale = (designedPixelSize: number, factor = 0.3) =>
  designedPixelSize +
  (horizontalScale(designedPixelSize) - designedPixelSize) * factor;

// Returns in Tailwind "arbitrary values" formatting of `[<pixelSize>px]`
const moderateScaleTW = (designedPixelSize: number, factor = 0.3) => {
  return `[${moderateScale(designedPixelSize, factor)}px]`;
};

export {
  horizontalScale,
  horizontalScaleTW,
  moderateScale,
  moderateScaleTW,
  verticalScale,
  verticalScaleTW,
};
