import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders App main component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-test-id');
  expect(appElement).toBeInTheDocument();
});
