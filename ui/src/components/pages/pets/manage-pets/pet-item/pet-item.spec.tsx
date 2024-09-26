import { render } from '@testing-library/react-native';

import { PetItem } from './pet-item';

describe('PetItem', () => {
  it('should render successfully', () => {
    const { root } = render(<PetItem />);
    expect(root).toBeTruthy();
  });
});
