import { render } from '@testing-library/react-native';

import { RadioGroup } from './radio-group';

describe('RadioGroup', () => {
  it('should render successfully', () => {
    const { root } = render(<RadioGroup />);
    expect(root).toBeTruthy();
  });
});
