import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AllDonor from "./AllDonor"; 
import { getallDonarDetail } from "../../services/ApiService";

jest.mock("../../services/ApiService", () => ({
  getallDonarDetail: jest.fn(),
}));

describe("AllDonar component", () => {
  test("renders all donor details on fetch",  () => {

    const mockDonorData = [
      {
        donorName: "John Doe",
        donorEmail: "johndoe@example.com",
        donorAddress: "123 Main St",
        donorPan: "ABCDE1234F",
        dateOfBirth: "1990-01-01",
        donorAmount: 1000,
      },

    ];

    getallDonarDetail.mockResolvedValueOnce({ data: mockDonorData });

    // Render the component
    render(<AllDonor/>)

    // Click the "Fetch Details" button
   expect(()=> fireEvent.click(screen.queryByText("Fetch Details")));

    // Wait for the donor details to be fetched and displayed
     waitFor(() => {
      mockDonorData.forEach((donor) => {
        expect(screen.getByText(donor.donorName)).toBeInTheDocument();
        expect(screen.getByText(donor.donorEmail)).toBeInTheDocument();
        expect(screen.getByText(donor.donorAddress)).toBeInTheDocument();
        expect(screen.getByText(donor.donorPan)).toBeInTheDocument();
        expect(screen.getByText(donor.dateOfBirth)).toBeInTheDocument();
        expect(screen.getByText(donor.donorAmount.toString())).toBeInTheDocument();
      });
    });
  });
  
  });

