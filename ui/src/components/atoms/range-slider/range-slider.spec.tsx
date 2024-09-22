import { render } from '@testing-library/react-native';
import React from 'react';

import { RangeSlider } from './range-slider';

describe('RangeSlider', () => {
  it('should render successfully', () => {
    const { root } = render(<RangeSlider />);
    expect(root).toBeTruthy();
  });
});
