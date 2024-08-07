import { ROnboarding } from '@rufferal-frontend/store';
import { MobileOnboarding } from '../../components/MobileOnboarding';

export const OnboardingScreen = () => (
  <ROnboarding swiper={<MobileOnboarding />} />
);
