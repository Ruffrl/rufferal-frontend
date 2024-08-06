import { ROnboarding } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';

export const OnboardingScreen = observer(() => {
  return <ROnboarding mobile />;
});
