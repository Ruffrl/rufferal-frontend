import { render } from '@testing-library/react-native';

import { DogPersonality } from './dog-personality';

describe('DogPersonality', () => {
  it('should render successfully', () => {
    const { root } = render(<DogPersonality />);
    expect(root).toBeTruthy();
  });
});
