import { render } from '@testing-library/react-native';

import { DogCareplan } from './dog-careplan';

describe('DogCareplan', () => {
  it('should render successfully', () => {
    const { root } = render(<DogCareplan />);
    expect(root).toBeTruthy();
  });
});
