import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // We use MemoryRouter for testing the Link component

import AdminPage from "./AdminPage";

describe("AdminPage component", () => {
  test("renders the admin page with buttons and links", () => {
    render(
      <MemoryRouter>
        <AdminPage />
      </MemoryRouter>
    );

    // Test the page title
    const pageTitle = screen.getByText("Admin Services");
    expect(pageTitle).toBeInTheDocument();

    // Test the buttons and links
    const allDonorButton = screen.getByText("All Donor Details");
    const allTransactionButton = screen.getByText("All Transaction Details");
    const transactionOfParticularEmailButton = screen.queryByText(
      "Transaction of a Particular Donor"
    );

    expect(allDonorButton).toBeInTheDocument();
    expect(allTransactionButton).toBeInTheDocument();
   waitFor(()=> expect(transactionOfParticularEmailButton).toBeInTheDocument());

    
  });

  
});
