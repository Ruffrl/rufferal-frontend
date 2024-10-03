import { render } from '@testing-library/react-native';

import { LayeredAvatars } from './layered-avatars';

describe('LayeredAvatars', () => {
  it('should render successfully', () => {
    const { root } = render(<LayeredAvatars />);
    expect(root).toBeTruthy();
  });
});
