import React from 'react';
import { render, waitFor } from '@testing-library/react';
import {App} from './App';

// Mock the BrowserRouter
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

test('renders the PageRoutes component', () => {
  // Render the App component
  const { queryByTestId } = render(App);
  
  // Find the PageRoutes component by its test ID
  const pageRoutesComponent = queryByTestId('page-routes');
  
  // Check if the PageRoutes component is rendered
 waitFor(()=> expect(pageRoutesComponent).toBeInTheDocument());
});
