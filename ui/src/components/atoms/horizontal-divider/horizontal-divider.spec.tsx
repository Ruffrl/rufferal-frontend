import { render } from '@testing-library/react-native';

import { HorizontalDivider } from './horizontal-divider';

describe('HorizontalDivider', () => {
  it('should render successfully', () => {
    const { root } = render(<HorizontalDivider />);
    expect(root).toBeTruthy();
  });
});
