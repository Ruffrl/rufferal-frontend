import { render } from '@testing-library/react-native';

import { InputPhoto } from './input-photo';

describe('InputPhoto', () => {
  it('should render successfully', () => {
    const { root } = render(<InputPhoto />);
    expect(root).toBeTruthy();
  });
});
