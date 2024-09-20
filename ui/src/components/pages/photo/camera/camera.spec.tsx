import { render } from '@testing-library/react-native';

import { Camera } from './camera';

describe('Camera', () => {
  it('should render successfully', () => {
    const { root } = render(<Camera />);
    expect(root).toBeTruthy();
  });
});
