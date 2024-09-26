import { render } from '@testing-library/react-native';

import { SecondaryFormHeader } from './secondary-form-header';

describe('SecondaryFormHeader', () => {
  it('should render successfully', () => {
    const { root } = render(<SecondaryFormHeader />);
    expect(root).toBeTruthy();
  });
});
