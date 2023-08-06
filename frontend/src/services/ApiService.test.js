import axios from 'axios';
import { addDonorInfo, DONOR_API_BASE_URL } from './ApiService';

jest.mock('axios');

describe('addDonorInfo', () => {

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

  it('should add a new donor', async () => {
    const response = {status : 201 ,data:{ donorID : 1}};
    axios.post.mockResolvedValue(response);

    const result = await addDonorInfo(donorData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith( `http://localhost:8080/api/donor/addDonor`,donorData);
    expect(result.data).toEqual(response.data); // Compare only the "data" property of the response
    expect(result.status).toEqual(response.status); // Compare only the "status" property of the response
 
  });

  it('should handle errors', async () => {
    const errorResponse = { response: { status: 500, data: { error: 'Server Error' } } };
    axios.post.mockRejectedValue(errorResponse);

    await expect(addDonorInfo(donorData)).rejects.toEqual(errorResponse);
  });
});
