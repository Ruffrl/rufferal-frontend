import { render } from '@testing-library/react-native';

import { FieldCharacterCount } from './field-character-count';

describe('FieldCharacterCount', () => {
  it('should render successfully', () => {
    const { root } = render(<FieldCharacterCount />);
    expect(root).toBeTruthy();
  });
});
