import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExistingDonorPage from './ExistingDonor';

describe('ExistingDonorPage', () => {
  test('renders and interacts with the form', () => {
    render(<ExistingDonorPage />);
    
    // Fill out the email input
    const emailInput = screen.getByPlaceholderText('Your Email Id');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Click the "Fetch Details" button
    const fetchButton = screen.getByText('Fetch Details');
    fireEvent.click(fetchButton);

  

    // Fill out the amount input
    const amountInput = screen.getByPlaceholderText('Amount');
    fireEvent.change(amountInput, { target: { value: '1000' } });

    // Select a transaction mode
    const transactionModeSelect = screen.getByPlaceholderText('Transaction mode');
    fireEvent.change(transactionModeSelect, { target: { value: 'IMPS' } });

    // Fill out the date input
    const dateInput = screen.getByPlaceholderText('Date');
    fireEvent.change(dateInput, { target: { value: '2023-08-16' } });

    // // Click the "Submit" button
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);

  
  });
});
