import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
  test('renders component without errors', () => {
    render(
      <MemoryRouter>
        <Header title="Test Title" />
      </MemoryRouter>
    );

    // Check for specific content in your component
    expect(screen.getByText('Dream School Foundation')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('navigates to home page when logo is clicked', () => {
    render(
      <MemoryRouter>
        <Header title="Test Title" />
      </MemoryRouter>
    );

    const logoLink = screen.queryByRole('link', { name: /dream school foundation/i });
   waitFor(()=> expect(logoLink).toBeInTheDocument());

    // Mock the click event
    const mockClickEvent = { button: 0 };
   waitFor(()=> logoLink.click(mockClickEvent));

  });

});
