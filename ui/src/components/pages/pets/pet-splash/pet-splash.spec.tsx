import { render } from '@testing-library/react-native';

import { PetSplash } from './pet-splash';

describe('PetSplash', () => {
  it('should render successfully', () => {
    const { root } = render(<PetSplash />);
    expect(root).toBeTruthy();
  });
});
