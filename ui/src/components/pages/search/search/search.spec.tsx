import { render } from '@testing-library/react-native';

import { Search } from './search';

describe('Search', () => {
  it('should render successfully', () => {
    const { root } = render(<Search />);
    expect(root).toBeTruthy();
  });
});
