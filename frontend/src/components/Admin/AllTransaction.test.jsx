import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AllTransaction from "./AllTransaction"; // Update the import path if needed
import { getAllTransaction } from "../../services/ApiService";

jest.mock("../../services/ApiService", () => ({
  getAllTransaction: jest.fn(),
}));

describe("AllTransaction component", () => {
  test("renders all transaction details on fetch", async () => {
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
      // Add more mock data as needed
    ];

    getAllTransaction.mockResolvedValueOnce({ data: mockTransactionData });

    render(<AllTransaction />);

    fireEvent.click(screen.getByText("Fetch Details"));

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

  test("displays a message when no transactions are available", () => {
    getAllTransaction.mockResolvedValueOnce({ data: [] });

    render(AllTransaction);

    waitFor(()=> fireEvent.click(screen.getByText("Fetch Details")));

     waitFor(() => expect(screen.getByText("No transactions available")).toBeInTheDocument());
    });
  });

  

