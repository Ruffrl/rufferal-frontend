import { render } from '@testing-library/react-native';
import React from 'react';

import { FeatureNavigation } from './feature-navigation';

describe('FeatureNavigation', () => {
  it('should render successfully', () => {
    const { root } = render(<FeatureNavigation />);
    expect(root).toBeTruthy();
  });
});
