import { render } from '@testing-library/react-native';

import { LinkButton } from './link-button';

describe('LinkButton', () => {
  it('should render successfully', () => {
    const { root } = render(<LinkButton />);
    expect(root).toBeTruthy();
  });
});
