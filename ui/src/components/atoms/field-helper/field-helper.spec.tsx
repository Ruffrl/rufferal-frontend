import { render } from '@testing-library/react-native';

import { FieldHelper } from './field-helper';

describe('FieldHelper', () => {
  it('should render successfully', () => {
    const { root } = render(<FieldHelper />);
    expect(root).toBeTruthy();
  });
});
