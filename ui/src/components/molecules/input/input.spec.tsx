import { render } from '@testing-library/react-native';

import { Input } from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { root } = render(<Input />);
    expect(root).toBeTruthy();
  });
});
