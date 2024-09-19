import { render } from '@testing-library/react-native';

import { Select } from './select';

describe('Select', () => {
  it('should render successfully', () => {
    const { root } = render(<Select />);
    expect(root).toBeTruthy();
  });
});
