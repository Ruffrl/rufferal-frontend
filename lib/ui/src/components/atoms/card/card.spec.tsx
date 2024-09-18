import { render } from '@testing-library/react-native';

import { Card } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { root } = render(<Card />);
    expect(root).toBeTruthy();
  });
});
