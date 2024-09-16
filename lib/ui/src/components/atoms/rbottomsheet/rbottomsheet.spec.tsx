import { render } from '@testing-library/react-native';

import { RBottomsheet } from './rbottomsheet';

describe('Bottomsheet', () => {
  it('should render successfully', () => {
    const { root } = render(<RBottomsheet />);
    expect(root).toBeTruthy();
  });
});
