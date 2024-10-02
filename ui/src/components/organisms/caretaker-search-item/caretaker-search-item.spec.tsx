import { render } from '@testing-library/react-native';

import { CaretakerSearchItem } from './caretaker-search-item';

describe('CaretakerSearchItem', () => {
  it('should render successfully', () => {
    const { root } = render(<CaretakerSearchItem />);
    expect(root).toBeTruthy();
  });
});
