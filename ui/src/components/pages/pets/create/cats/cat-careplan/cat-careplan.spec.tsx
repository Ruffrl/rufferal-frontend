import { render } from '@testing-library/react-native';

import { CatCareplan } from './cat-careplan';

describe('CatCareplan', () => {
  it('should render successfully', () => {
    const { root } = render(<CatCareplan />);
    expect(root).toBeTruthy();
  });
});
