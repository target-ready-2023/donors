
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders PageRoutes component', () => {
  const { getByTestId } = render(<App />);
  const pageRoutesElement = getByTestId('page-routes');
  expect(pageRoutesElement).toBeInTheDocument();
});

// test('contains BrowserRouter component', () => {
//   const { container } = render(<App />);
//   const browserRouterElement = container.querySelector('BrowserRouter');
//   expect(browserRouterElement).toBeInTheDocument();
// });

// test('contains PageRoutes component', () => {
//   const { container } = render(<App />);
//   const pageRoutesElement = container.querySelector('PageRoutes');
//   expect(pageRoutesElement).toBeInTheDocument();
// });
