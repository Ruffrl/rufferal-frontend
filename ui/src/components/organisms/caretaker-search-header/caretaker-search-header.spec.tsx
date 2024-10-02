import { render } from '@testing-library/react-native';

import { CaretakerSearchHeader } from './caretaker-search-header';

describe('CaretakerSearchHeader', () => {
  it('should render successfully', () => {
    const { root } = render(<CaretakerSearchHeader />);
    expect(root).toBeTruthy();
  });
});
