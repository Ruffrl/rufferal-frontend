import { render } from '@testing-library/react-native';

import { DogAvatar } from './dog-avatar';

describe('DogAvatar', () => {
  it('should render successfully', () => {
    const { root } = render(<DogAvatar />);
    expect(root).toBeTruthy();
  });
});
