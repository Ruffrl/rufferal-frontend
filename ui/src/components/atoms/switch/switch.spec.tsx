import { render } from '@testing-library/react-native';
import React from 'react';

import { Switch } from './switch';

describe('Switch', () => {
  it('should render successfully', () => {
    const { root } = render(<Switch />);
    expect(root).toBeTruthy();
  });
});
