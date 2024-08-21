/* [PAGES] ATOMIC DESIGN
 *
 * Pages bring templates to life with actual content
 *
 * Pages are specific instances of templates filled with real content
 * They represent the final product that users interact with
 * Pages include:
 *   Homepage: Filled with actual images, text, and calls to action
 *   Product Page: Populated with product details, reviews, and purchase options
 *   Article Page: Complete with actual articles, images, and related links
 *
 */

// Accounts, Profiles, Settings
export { RCreateProfileAvatar } from './profile/RCreateProfileAvatar';
export { RCreateProfileName } from './profile/RCreateProfileName';
export { RCreateProfileType } from './profile/RCreateProfileType';

// Onboarding and Auth
export { RForgotPassword } from './access/RForgotPassword';
export { RLogin } from './access/RLogin';
export {
  ROnboarding,
  SWIPER_CONTAINER_STYLES,
  SWIPER_IMAGE_STYLES,
  SWIPER_NAVIGATION_STYLES,
  SWIPER_SLIDE_STYLE,
  SWIPER_STYLES,
  SWIPER_TEXT_STYLES,
} from './access/ROnboarding';
export type { OnboardingNavigationProps } from './access/ROnboarding';
export { RResetPassword } from './access/RResetPassword';
export { RSignup } from './access/RSignup';
export { RVerification } from './access/RVerification';

// Must be authenticated
export { RDash } from './RDash';
export { RProfile } from './RProfile';

// Shared
export { RDevPlayground } from './RDevPlayground';
export { RHome } from './RHome';
