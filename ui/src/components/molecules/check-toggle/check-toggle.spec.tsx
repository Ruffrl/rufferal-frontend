import { render } from '@testing-library/react-native';

import { CheckToggle } from './check-toggle';

describe('CheckToggle', () => {
  it('should render successfully', () => {
    const { root } = render(<CheckToggle />);
    expect(root).toBeTruthy();
  });
});
