import React from 'react';
import { render } from '@testing-library/react-native';

import CreatePetCareplan from './create-pet-careplan';

describe('CreatePetCareplan', () => {
  it('should render successfully', () => {
    const { root } = render(< CreatePetCareplan />);
    expect(root).toBeTruthy();
  });
});
