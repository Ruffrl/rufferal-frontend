import { render } from '@testing-library/react-native';

import { ArrowRight } from './arrow-right';

describe('ArrowRight', () => {
  it('should render successfully', () => {
    const { root } = render(<ArrowRight />);
    expect(root).toBeTruthy();
  });
});
