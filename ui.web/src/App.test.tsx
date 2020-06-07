import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders this is a test text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/this is a test/i);
  expect(textElement).toBeInTheDocument();
});
