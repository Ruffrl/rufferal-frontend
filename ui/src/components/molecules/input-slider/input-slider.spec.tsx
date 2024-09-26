import { render } from '@testing-library/react-native';

import { InputSlider } from './input-slider';

describe('InputSlider', () => {
  it('should render successfully', () => {
    const { root } = render(<InputSlider />);
    expect(root).toBeTruthy();
  });
});
