import { render } from '@testing-library/react-native';

import { SingleSlider } from './single-slider';

describe('SingleSlider', () => {
  it('should render successfully', () => {
    const { root } = render(<SingleSlider />);
    expect(root).toBeTruthy();
  });
});
