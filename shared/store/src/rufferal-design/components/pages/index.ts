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

export { RDashboard } from './access/RDashboard';
export { REmailVerification } from './access/REmailVerification';
export { RLogin } from './access/RLogin';
export {
  ROnboarding,
  SWIPER_ANDROID_IMAGE_STYLES,
  SWIPER_CONTAINER_STYLES,
  SWIPER_IMAGE_STYLES,
  SWIPER_SLIDE_STYLE,
} from './access/ROnboarding';
export type { OnboardingNavigationProps } from './access/ROnboarding';
export { RSignup } from './access/RSignup';

export { RDash } from './RDash';
export { RDevPlayground } from './RDevPlayground';
export { RHome } from './RHome';
export { RProfile } from './RProfile';
