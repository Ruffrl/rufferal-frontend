import { render } from '@testing-library/react-native';

import { CheckLabel } from './check-label';

describe('CheckLabel', () => {
  it('should render successfully', () => {
    const { root } = render(<CheckLabel />);
    expect(root).toBeTruthy();
  });
});
