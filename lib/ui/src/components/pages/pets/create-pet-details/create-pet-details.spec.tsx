import React from 'react';
import { render } from '@testing-library/react-native';

import CreatePetDetails from './create-pet-details';

describe('CreatePetDetails', () => {
  it('should render successfully', () => {
    const { root } = render(< CreatePetDetails />);
    expect(root).toBeTruthy();
  });
});
