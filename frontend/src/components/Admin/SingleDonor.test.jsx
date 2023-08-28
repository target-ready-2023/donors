import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import  SingleDonor  from "./SingleDonor";
import { getAllTransactionOfParticularDonor } from "../../services/ApiService";

jest.mock("../../services/ApiService", () => ({
  getAllTransactionOfParticularDonor: jest.fn(),
}));

describe("SingleDonor component", () => {
  test("renders transaction details for a particular donor on fetch", async () => {
    // Mock the data returned by ApiService for transaction details
    const mockTransactionData = [
      {
        donorName: "Muskan",
        transactionId: "TXN123",
        invoiceId: "INV456",
        transactionDate: "2023-08-10",
        transactionMode: "Online",
        amount: 500,
      },
    ];

    // Mock the ApiService function to resolve with mock data
    getAllTransactionOfParticularDonor.mockResolvedValueOnce({
      data: mockTransactionData,
    });

    // Render the component
    render(<SingleDonor />);

    const emailInput = screen.getByPlaceholderText("Your Email Id");
    const fetchButton = screen.getByText("Fetch Details");

    // Check if input and button elements are rendered
    expect(emailInput).toBeInTheDocument();
    expect(fetchButton).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Simulate button click
    fireEvent.click(fetchButton);

    // Wait for the transaction details to be fetched and displayed
    await waitFor(() => {
      mockTransactionData.forEach((transaction) => {
        expect(screen.getByText(transaction.donorName)).toBeInTheDocument();
        expect(screen.getByText(transaction.transactionId)).toBeInTheDocument();
        expect(screen.getByText(transaction.invoiceId)).toBeInTheDocument();
        expect(screen.getByText(transaction.transactionDate)).toBeInTheDocument();
        expect(screen.getByText(transaction.transactionMode)).toBeInTheDocument();
        expect(screen.getByText(transaction.amount.toString())).toBeInTheDocument();
      });
    });
  });

});
