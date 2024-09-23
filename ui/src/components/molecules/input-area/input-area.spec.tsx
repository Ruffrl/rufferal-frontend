import { render } from '@testing-library/react-native';

import { Input } from './input-area';

describe('Input', () => {
  it('should render successfully', () => {
    const { root } = render(<Input />);
    expect(root).toBeTruthy();
  });
});
