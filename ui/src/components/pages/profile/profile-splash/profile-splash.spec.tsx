import { render } from '@testing-library/react-native';

import { ProfileSplash } from './profile-splash';

describe('ProfileSplash', () => {
  it('should render successfully', () => {
    const { root } = render(<ProfileSplash />);
    expect(root).toBeTruthy();
  });
});
