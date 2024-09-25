import { render } from '@testing-library/react-native';

import { BehaviorLabel } from './behavior-label';

describe('BehaviorLabel', () => {
  it('should render successfully', () => {
    const { root } = render(<BehaviorLabel />);
    expect(root).toBeTruthy();
  });
});
