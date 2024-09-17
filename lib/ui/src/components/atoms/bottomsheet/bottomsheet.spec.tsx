import { render } from '@testing-library/react-native';

import { Bottomsheet } from './bottomsheet';

describe('Bottomsheet', () => {
  it('should render successfully', () => {
    const { root } = render(<Bottomsheet />);
    expect(root).toBeTruthy();
  });
});
