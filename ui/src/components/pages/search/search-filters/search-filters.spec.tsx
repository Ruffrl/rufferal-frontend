import { render } from '@testing-library/react-native';

import { SearchFilters } from './search-filters';

describe('SearchFilters', () => {
  it('should render successfully', () => {
    const { root } = render(<SearchFilters />);
    expect(root).toBeTruthy();
  });
});
