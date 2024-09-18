import { render } from '@testing-library/react-native';

import { SplashTemplate } from './splash-template';

describe('SplashTemplate', () => {
  it('should render successfully', () => {
    const { root } = render(<SplashTemplate />);
    expect(root).toBeTruthy();
  });
});
