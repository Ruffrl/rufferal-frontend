import { render } from '@testing-library/react-native';

import { VerticalDivider } from './vertical-divider';

describe('VerticalDivider', () => {
  it('should render successfully', () => {
    const { root } = render(<VerticalDivider />);
    expect(root).toBeTruthy();
  });
});
