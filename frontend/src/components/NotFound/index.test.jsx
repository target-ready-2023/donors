import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './index';

describe('NotFound component', () => {
  it('renders 404 error message', () => {
    const { getByText } = render(<NotFound />);
    const errorMessage = getByText(/404 error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Page not found" message', () => {
    const { getByText } = render(<NotFound />);
    const notFoundMessage = getByText(/Page not found/i);
    expect(notFoundMessage).toBeInTheDocument();
  });

  it('renders with the correct class', () => {
    const { container } = render(<NotFound />);
    const cardElement = container.querySelector('.App-Card');
    expect(cardElement).toBeInTheDocument();
  });
});
