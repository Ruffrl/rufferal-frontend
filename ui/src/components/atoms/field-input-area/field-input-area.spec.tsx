import { render } from '@testing-library/react-native';

import { FieldInputArea } from './field-input-area';

describe('FieldInputArea', () => {
  it('should render successfully', () => {
    const { root } = render(<FieldInputArea />);
    expect(root).toBeTruthy();
  });
});
