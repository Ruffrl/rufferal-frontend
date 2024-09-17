import React from 'react';
import { render } from '@testing-library/react-native';

import H2 from './h2';

describe('H2', () => {
  it('should render successfully', () => {
    const { root } = render(< H2 />);
    expect(root).toBeTruthy();
  });
});
