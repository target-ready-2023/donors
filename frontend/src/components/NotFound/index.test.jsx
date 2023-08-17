import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './index';

describe('NotFound component', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<NotFound />);
    
    const titleElement = getByText('404 error');
    const subtitleElement = getByText('Page not found');
    
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the component with correct className', () => {
    const { container } = render(<NotFound />);
    const cardElement = container.firstChild;
    
    expect(cardElement).toHaveClass('App-Card');
  });

});
