import { render } from '@testing-library/react-native';

import { CatAvatar } from './cat-avatar';

describe('CatAvatar', () => {
  it('should render successfully', () => {
    const { root } = render(<CatAvatar />);
    expect(root).toBeTruthy();
  });
});
