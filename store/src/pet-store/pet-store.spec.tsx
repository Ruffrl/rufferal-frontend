import { render } from '@testing-library/react-native';

import PetStore from './pet-store';

describe('PetStore', () => {
  it('should render successfully', () => {
    const { root } = render(<PetStore />);
    expect(root).toBeTruthy();
  });
});
