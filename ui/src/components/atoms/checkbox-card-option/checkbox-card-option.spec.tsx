import { fireEvent, render } from '@testing-library/react-native';
import { CheckboxCardOption } from './checkbox-card-option';

describe('CheckboxCardOption', () => {
  const mockOnPress = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct label and default state', () => {
    const { getByText } = render(
      <CheckboxCardOption label="Test Option" onPress={mockOnPress} />
    );

    const label = getByText('Test Option');
    expect(label).toBeTruthy();
  });

  it('toggles selection state when pressed', () => {
    const { getByText } = render(
      <CheckboxCardOption label="Test Option" onPress={mockOnPress} />
    );

    const option = getByText('Test Option').parent.parent;

    expect(option).not.toHaveStyle({
      backgroundColor: '#F6E8FF',
      borderColor: '#9525CB',
    });

    // Press the option
    fireEvent.press(option.parent);

    // Check if onPress was called with correct arguments
    expect(mockOnPress).toHaveBeenCalledWith({
      label: 'Test Option',
      value: 'Test Option',
    });

    expect(option).toHaveStyle({
      backgroundColor: '#F6E8FF',
      borderColor: '#9525CB',
    });

    // Press again to toggle back
    fireEvent.press(option.parent);

    // Check if onPress was called again
    expect(mockOnPress).toHaveBeenCalledTimes(2);
  });
});
