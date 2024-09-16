import React from 'react';
import { render } from '@testing-library/react-native';

import CreatePetOnboarding from './create-pet-onboarding';

describe('CreatePetOnboarding', () => {
  it('should render successfully', () => {
    const { root } = render(< CreatePetOnboarding />);
    expect(root).toBeTruthy();
  });
});
