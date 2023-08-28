import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // You can use MemoryRouter to simulate routing
import Homef from './index';

// Mock images
jest.mock('../../images/img1.jpeg', () => 'imga');
jest.mock('../../images/img2.jpeg', () => 'imgb');
jest.mock('../../images/img3.jpeg', () => 'imgc');

describe('Homef', () => {
  test('renders component without errors', () => {
    render(
      <MemoryRouter>
        <Homef />
      </MemoryRouter>
    );

    // Check for specific content in your component
    expect(screen.getByText(/Giving is not just about making a donation/i)).toBeInTheDocument();
  });

  test('navigates to New Donor page', () => {
    render(
      <MemoryRouter>
        <Homef />
      </MemoryRouter>
    );

    const newDonorButton = screen.getByText('New Donor');
    expect(newDonorButton).toBeInTheDocument();

    // Mock the click event
    const mockClickEvent = { button: 0 };
    newDonorButton.click(mockClickEvent);

    // Check if the navigation occurred
  waitFor(()=>  expect(screen.queryByText('New Donor Page')).toBeInTheDocument()); // Adjust this based on your actual component's content
  });
});
