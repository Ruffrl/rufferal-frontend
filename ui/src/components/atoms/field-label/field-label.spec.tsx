import { render } from '@testing-library/react-native';

import { FieldLabel } from './field-label';

describe('FieldLabel', () => {
  it('should render successfully', () => {
    const { root } = render(<FieldLabel />);
    expect(root).toBeTruthy();
  });
});
