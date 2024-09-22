import { render } from '@testing-library/react-native';

import { OverrideSafeFeatureTemplate } from './override-safe-feature-template';

describe('OverrideSafeFeatureTemplate', () => {
  it('should render successfully', () => {
    const { root } = render(<OverrideSafeFeatureTemplate />);
    expect(root).toBeTruthy();
  });
});
