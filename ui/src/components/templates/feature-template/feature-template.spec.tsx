import { render } from '@testing-library/react-native';

import { FeatureTemplate } from './feature-template';

describe('FeatureTemplate', () => {
  it('should render successfully', () => {
    const { root } = render(<FeatureTemplate />);
    expect(root).toBeTruthy();
  });
});
