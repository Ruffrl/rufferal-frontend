import { render } from '@testing-library/react-native';
import React from 'react';

import { H3 } from './h3';

describe('H3', () => {
  it('should render successfully', () => {
    const { root } = render(<H3 />);
    expect(root).toBeTruthy();
  });
});
