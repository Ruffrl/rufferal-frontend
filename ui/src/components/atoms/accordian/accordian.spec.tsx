import { render } from '@testing-library/react-native';

import { Accordian } from './accordian';

describe('Accordian', () => {
  it('should render successfully', () => {
    const { root } = render(<Accordian />);
    expect(root).toBeTruthy();
  });
});
