import axios from 'axios';
import { addDonorInfo } from '../../services/ApiService';

jest.mock('axios');

describe('addDonorInfo', () => {

  const donorData = {donorName : "Srilaxmi",
    donorAddress : "Telangana",
    donorEmail: "srilaxmijaina.01@gmail.com",
    dateOfBirth : "03-12-2001",
    donorPan : "AHQF7122D",
    transactions : [{
      amount : 20000,
      transactionMode : 'UPI',
      transactionDate : '20-12-2019'
    }] };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add a new donor', async () => {
    const response = {status : 201 ,data:{ donorID : "DN-0001"}};
    axios.post.mockResolvedValue(response);

    const result = await addDonorInfo(donorData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith( `http://localhost:8080/api/donor/addDonor`,donorData);
    expect(result.data).toEqual(response.data);
    expect(result.status).toEqual(response.status);
 
  });

  it('should handle errors', async () => {
    const errorResponse = { response: { status: 500, data: { error: 'Server Error' } } };
    axios.post.mockRejectedValue(errorResponse);

    await expect(addDonorInfo(donorData)).rejects.toEqual(errorResponse);
  });
});