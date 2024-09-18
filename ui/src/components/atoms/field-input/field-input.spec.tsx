import { render } from '@testing-library/react-native';

import { FieldInput } from './field-input';

describe('FieldInput', () => {
  it('should render successfully', () => {
    const { root } = render(<FieldInput />);
    expect(root).toBeTruthy();
  });
});
