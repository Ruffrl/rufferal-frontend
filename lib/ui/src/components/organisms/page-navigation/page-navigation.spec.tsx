import { render } from '@testing-library/react-native';
import React from 'react';

import { PageNavigation } from './page-navigation';

describe('H2', () => {
  it('should render successfully', () => {
    const { root } = render(<PageNavigation />);
    expect(root).toBeTruthy();
  });
});
