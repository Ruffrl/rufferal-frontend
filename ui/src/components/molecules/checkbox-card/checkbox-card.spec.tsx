import { fireEvent, render } from '@testing-library/react-native';

import { CheckboxCard } from './checkbox-card';

describe('CheckboxCard', () => {
  const handlePress = jest.fn();

  const testComponent = (
    <CheckboxCard>
      <CheckboxCard.Option onPress={handlePress} label="Test option" />
    </CheckboxCard>
  );

  it('should render successfully', () => {
    const { root } = render(testComponent);
    expect(root).toBeTruthy();
  });

  it('calls onPress when an option is pressed', () => {
    const { getByText } = render(testComponent);

    fireEvent.press(getByText('Test option'));
    expect(handlePress).toHaveBeenCalledWith({
      label: 'Test option',
      value: 'Test option',
    });
  });

  it('toggles selection state when pressed', () => {
    const { getByText } = render(testComponent);

    const option = getByText('Test option');
    fireEvent.press(option);
    expect(option.parent.parent.props.style[1].borderColor).toBe('#007AFF');

    fireEvent.press(option);
    expect(option.parent.parent.props.style[1].borderColor).toBe('#CCCCCC');
  });
});
