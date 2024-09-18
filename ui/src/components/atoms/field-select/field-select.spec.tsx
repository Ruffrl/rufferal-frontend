import { render } from '@testing-library/react-native';

import { FieldSelect } from './field-select';

describe('FieldSelect', () => {
  it('should render successfully', () => {
    const { root } = render(<FieldSelect />);
    expect(root).toBeTruthy();
  });
});
