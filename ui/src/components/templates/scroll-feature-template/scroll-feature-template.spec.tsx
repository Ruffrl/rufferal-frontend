import { render } from '@testing-library/react-native';

import { ScrollFeatureTemplate } from './scroll-feature-template';

describe('ScrollFeatureTemplate', () => {
  it('should render successfully', () => {
    const { root } = render(<ScrollFeatureTemplate />);
    expect(root).toBeTruthy();
  });
});
