import React from 'react';
import { render } from '@testing-library/react-native';

import CreatePetPersonality from './create-pet-personality';

describe('CreatePetPersonality', () => {
  it('should render successfully', () => {
    const { root } = render(< CreatePetPersonality />);
    expect(root).toBeTruthy();
  });
});
