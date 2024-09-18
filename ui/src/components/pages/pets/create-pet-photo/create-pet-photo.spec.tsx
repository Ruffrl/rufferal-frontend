import React from 'react';
import { render } from '@testing-library/react-native';

import CreatePetPhoto from './create-pet-photo';

describe('CreatePetPhoto', () => {
  it('should render successfully', () => {
    const { root } = render(< CreatePetPhoto />);
    expect(root).toBeTruthy();
  });
});
