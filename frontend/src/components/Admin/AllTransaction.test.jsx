import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AllTransaction from "./AllTransaction"; // Update the import path if needed
import { getAllTransaction } from "../../services/ApiService";

jest.mock("../../services/ApiService", () => ({
  getAllTransaction: jest.fn(),
}));

describe("AllTransaction component", () => {
  test("renders all transaction details on fetch", async () => {
    // Mock the data returned by ApiService for all transaction details
    const mockTransactionData = [
      {
        donorName: "Muskan",
        donorEmail: "muskannadhediya6488@gmail.com",
        invoiceId: "INV123",
        transactionId: "TXN456",
        transactionDate: "2023-08-10",
        amount: 10000,
        fiscalYear: "2023-2024",
      },
    
    ];

    getAllTransaction.mockResolvedValueOnce({ data: mockTransactionData });

    // Render the component
    render(<AllTransaction />);

    // Click the "Fetch Details" button
    fireEvent.click(screen.getByText("Fetch Details"));

    // Wait for the transaction details to be fetched and displayed
    await waitFor(() => {
      mockTransactionData.forEach((transaction) => {
        expect(screen.getByText(transaction.donorName)).toBeInTheDocument();
        expect(screen.getByText(transaction.donorEmail)).toBeInTheDocument();
        expect(screen.getByText(transaction.invoiceId)).toBeInTheDocument();
        expect(screen.getByText(transaction.transactionId)).toBeInTheDocument();
        expect(screen.getByText(transaction.transactionDate)).toBeInTheDocument();
        expect(screen.getByText(transaction.amount.toString())).toBeInTheDocument();
        expect(screen.getByText(transaction.fiscalYear)).toBeInTheDocument();
      });
    });
  });

  // ... add more test cases as needed
});
