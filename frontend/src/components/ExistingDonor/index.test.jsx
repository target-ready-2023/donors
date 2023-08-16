import axios from 'axios';
import { addTransactionInfo } from '../../services/ApiService';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ExistingDonorPage from './index';
import { MemoryRouter } from "react-router-dom";
jest.mock('axios');

  
  describe('getDonorDetailsById', () => {
    test("addTransactionInfo sends data to the correct URL with varying transaction amount", async () => {
        // Arrange
        const testData = {
            donorEmail: "test@example.com",
            name: "John Doe",
            address: "123 Main St",
            pan: "ABCDE1234F",
            amount: 500, // Initial transaction amount
            transactionMode: "UPI",
            date: new Date(),
        };
        
        // New transaction amount and mode
        const newAmount = 1000;
        const newTransactionMode="IMPS";
        // Act
        testData.amount = newAmount;
        testData.transactionMode=newTransactionMode
        const response = await addTransactionInfo(testData);
        
        // Assert
        expect(axios.put).toHaveBeenCalledTimes(1);
        expect(axios.put).toHaveBeenCalledWith(
            `http://localhost:8080/api/donor/addTransaction`, expect.objectContaining({
                address: '123 Main St',
                amount: newAmount,
                date: expect.any(Date),
                donorEmail: 'test@example.com',
                name: 'John Doe',
                pan: 'ABCDE1234F',
                transactionMode: newTransactionMode,
              }));
    });
    test('fetches donor details on button click', () => {
        render(
          <MemoryRouter>
            <ExistingDonorPage/>
          </MemoryRouter>
        );
        
        const emailInput = screen.queryByLabelText('Email-Id');
     waitFor(()=>fireEvent.change(emailInput, { target: { value: 'test@example.com' } }));
      
        const fetchButton = screen.queryByText('Fetch Details');
       waitFor(()=> fireEvent.click(fetchButton));
      
      });
      test('submits transaction details on button click', () => {
        render(ExistingDonorPage);
      });
  });
