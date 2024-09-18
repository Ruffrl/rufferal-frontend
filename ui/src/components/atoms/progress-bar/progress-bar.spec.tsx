import { render } from '@testing-library/react-native';

import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { root } = render(<ProgressBar />);
    expect(root).toBeTruthy();
  });
});
