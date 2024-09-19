import { render } from '@testing-library/react-native';

import { Tag } from './tag';

describe('Tag', () => {
  it('should render successfully', () => {
    const { root } = render(<Tag />);
    expect(root).toBeTruthy();
  });
});
