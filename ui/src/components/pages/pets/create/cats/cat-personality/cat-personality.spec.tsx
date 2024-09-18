import { render } from '@testing-library/react-native';

import { CatPersonality } from './cat-personality';

describe('CatPersonality', () => {
  it('should render successfully', () => {
    const { root } = render(<CatPersonality />);
    expect(root).toBeTruthy();
  });
});
