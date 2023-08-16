import axios from 'axios';
import { getDonorDetailsById,getCertificate,addTransactionInfo } from '../../services/ApiService';
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extended jest matchers
import EightyGCertificate from "./index"; // Update the path accordingly
import { MemoryRouter } from "react-router-dom";
jest.mock('axios');

  
  describe('getDonorDetailsById', () => {
    it('fetches successfully data from an API', async () => {
      const email = 'anjalidumri@gmail.com';
      const responseData = {name:"Anjali",donarEmail:"anjalidumri@gmail.com",pan:"efergr"};
  
      axios.get.mockResolvedValue( responseData );
  
      const result = await getDonorDetailsById(email);
  
      expect(result).toEqual(responseData);
    });

    it('fetches erroneously data from an API', async () => {
      const email = 'anjalidumri@gmail.com';
  
      axios.get.mockRejectedValue(new Error('API Error'));
  
      await expect(getDonorDetailsById(email)).rejects.toThrow('API Error');
    });

    
  });

  describe('getCertificate', () => {
    it('fetches successfully certificate from an API', async () => {
      const email = 'anjalidumri@gmail.com';
      const year="FY2023-2024";
      const responseData = "Email with PDF attachment sent successfully!";
  
      axios.get.mockResolvedValue( responseData );
  
      const result = await getCertificate(email,year);
  
      expect(result).toEqual(responseData);
    });
  
  });
  describe("EightyGCertificate Component", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test("renders the form correctly", () => {
      render(
        <MemoryRouter>
          <EightyGCertificate/>
        </MemoryRouter>
      );
       // Test the page title
    const pageTitle = screen.getByText("80G Certificate");
    expect(pageTitle).toBeInTheDocument();
    });

    
});
 