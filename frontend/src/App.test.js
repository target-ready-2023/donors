import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PageRoutes component', () => {
  render(<App />);
  
  // Verify that the PageRoutes component is rendered
  const pageRoutesElement = screen.getByTestId('page-routes');
  expect(pageRoutesElement).toBeInTheDocument();
});
