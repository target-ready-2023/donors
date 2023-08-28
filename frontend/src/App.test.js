
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});
// Verify that the PageRoutes component is rendered
test('renders PageRoutes component', () => {
  const { getByTestId } = render(<App />);
  const pageRoutesElement = getByTestId('page-routes');
  expect(pageRoutesElement).toBeInTheDocument();
});


