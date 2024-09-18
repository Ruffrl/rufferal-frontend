import { render } from '@testing-library/react-native';

import { DogDetails } from './dog-details';

describe('DogDetails', () => {
  it('should render successfully', () => {
    const { root } = render(<DogDetails />);
    expect(root).toBeTruthy();
  });
});
