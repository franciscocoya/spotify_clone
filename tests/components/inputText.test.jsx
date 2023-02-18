import TextInput from '@components/inputs/textInput/TextInput';
import { render } from '@testing-library/react';

/**
 * Input component tests.
 */

describe('Input tests', () => {
  // Scenario 0: Check if input rendered successfully.
  test('Input type text is rendered', () => {
    const component1 = render(<TextInput type="text" name="test-field" />);
    expect(component1).toBeInTheDocument();
  });

  // Scenario 2: Input type password contains and eye icon
  // Scenario 3: Input type password show password when click on eye icon

  // Scenario 4: Input of undefined type
});
