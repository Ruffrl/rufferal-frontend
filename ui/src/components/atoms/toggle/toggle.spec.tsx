import { render } from '@testing-library/react-native';
import React from 'react';

import { Toggle } from './toggle';

describe('Toggle', () => {
  it('should render successfully', () => {
    const { root } = render(<Toggle />);
    expect(root).toBeTruthy();
  });
});
