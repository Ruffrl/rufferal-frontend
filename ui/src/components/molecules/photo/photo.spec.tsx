import { render } from '@testing-library/react-native';

import { Photo } from './photo';

describe('Photo', () => {
  it('should render successfully', () => {
    const { root } = render(<Photo />);
    expect(root).toBeTruthy();
  });
});
