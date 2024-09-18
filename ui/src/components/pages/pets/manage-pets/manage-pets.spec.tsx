import React from 'react';
import { render } from '@testing-library/react-native';

import ManagePets from './manage-pets';

describe('ManagePets', () => {
  it('should render successfully', () => {
    const { root } = render(< ManagePets />);
    expect(root).toBeTruthy();
  });
});
