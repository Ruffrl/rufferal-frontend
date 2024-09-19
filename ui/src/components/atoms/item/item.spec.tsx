import { render } from '@testing-library/react-native';

import { Item } from './item';

describe('Item', () => {
  it('should render successfully', () => {
    const { root } = render(<Item />);
    expect(root).toBeTruthy();
  });
});
