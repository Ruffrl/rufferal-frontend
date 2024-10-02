import { render } from '@testing-library/react-native';

import { DashboardNavigation } from './dashboard-navigation';

describe('DashboardNavigation', () => {
  it('should render successfully', () => {
    const { root } = render(<DashboardNavigation />);
    expect(root).toBeTruthy();
  });
});
