import { render } from '@testing-library/react-native';

import { SearchDashboard } from './search-dashboard';

describe('SearchDashboard', () => {
  it('should render successfully', () => {
    const { root } = render(<SearchDashboard />);
    expect(root).toBeTruthy();
  });
});
