import { render } from '@testing-library/react-native';

import { CatDetails } from './cat-details';

describe('CatDetails', () => {
  it('should render successfully', () => {
    const { root } = render(<CatDetails />);
    expect(root).toBeTruthy();
  });
});
