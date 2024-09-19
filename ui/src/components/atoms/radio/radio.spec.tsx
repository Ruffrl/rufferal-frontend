import { render } from '@testing-library/react-native';

import { Radio } from './radio';

describe('Radio', () => {
  it('should render successfully', () => {
    const { root } = render(<Radio />);
    expect(root).toBeTruthy();
  });
});
