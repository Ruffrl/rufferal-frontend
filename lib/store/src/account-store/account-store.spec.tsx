import React from 'react';
import { render } from '@testing-library/react-native';

import AccountStore from './account-store';

describe('AccountStore', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountStore />);
    expect(root).toBeTruthy();
  });
});
