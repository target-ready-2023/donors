import axios from 'axios';
import { addDonorInfo } from '../../services/ApiService';
import { render, screen, fireEvent } from "@testing-library/react";
import NewCustomer from "./index";
import { waitFor } from '@testing-library/react';
jest.mock('axios');

describe('New Donor', () => {

  const donorData = {donorName : "Akankshaaa",
    donorAddress : "Jaipur",
    donorEmail: "akankshafaujdar123@gmail.com",
    dateOfBirth : "2000-12-11",
    donorPan : "AHQF7122D",
    transactions : [{
      amount : '20000',
      transactionMode : 'UPI',
      transactionDate : '20-12-2019'
    }] };

  afterEach(() => {
    jest.clearAllMocks();
  });
//Testing of addDonorInfo 
  it('should add a new donor', async () => {
    const response = {status : 201 ,data:{ donorID : 1}};
    axios.post.mockResolvedValue(response);

    const result = await addDonorInfo(donorData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith( `http://localhost:8080/api/donor/addDonor`,donorData);
    expect(result.data).toEqual(response.data); // Compare only the "data" property of the response
    expect(result.status).toEqual(response.status); // Compare only the "status" property of the response
 
  });
//Error Handling
  it('should handle errors', async () => {
    const errorResponse = { response: { status: 500, data: { error: 'Server Error' } } };
    axios.post.mockRejectedValue(errorResponse);

    await expect(addDonorInfo(donorData)).rejects.toEqual(errorResponse);
  });
//Rendering NewDonor
  test("renders the NewDonor component", () => {
    render(NewCustomer);
    const nameInput = screen.queryByLabelText("Name");
  waitFor(()=>expect(nameInput).toBeInTheDocument());
  });

  
});
