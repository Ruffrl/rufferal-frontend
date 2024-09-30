import { render } from '@testing-library/react-native';

import { SearchResults } from './search-results';

describe('SearchResults', () => {
  it('should render successfully', () => {
    const { root } = render(<SearchResults />);
    expect(root).toBeTruthy();
  });
});
