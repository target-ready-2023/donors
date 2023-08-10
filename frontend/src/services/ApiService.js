import axios from 'axios';

const DONOR_API_BASE_URL = "http://localhost:8080/api/donor";
const EMAIL_API_BASE_URL = "http://localhost:8080/api/email";
const ALL_DONOR_DETAIL_URL="http://localhost:8080/api/admin";
const ALL_TRANSACTION_URL="http://localhost:8080/api/admin";
const ALL_TRANSACTION_OF_SINGLE_DONOR="http://localhost:8080/api/admin"
export const addDonorInfo = (data) => {
    return axios.post(`${DONOR_API_BASE_URL}/addDonor`, data);
};
  
export const addTransactionInfo = (data) => {
    return axios.put(`${DONOR_API_BASE_URL}/addTransaction`, data);
};

export const getDonorDetailsById = (donorEmail) => {
    return axios.get(`${DONOR_API_BASE_URL}/findByEmail`, {
        params:{
            donorEmail,
        },
    });
};

export const getCertificate = (donorEmail, fiscalYear) => {
    return axios.get(`${EMAIL_API_BASE_URL}/send`, {
        params : {
            donorEmail, fiscalYear,
        },
    });
};

export const getallDonarDetail=()=>{
    return axios.get(`${ALL_DONOR_DETAIL_URL}/getAllDonors`)
}

export const getAllTransactionOfParticularDonor=(donorEmail)=>{
    return axios.get(`${ALL_TRANSACTION_OF_SINGLE_DONOR}/getTransactionsWithEmail`,{
        params:{
            donorEmail
        }
    })
}
export const getAllTransaction=()=>{
    return axios.get(`${ALL_TRANSACTION_URL}/getAllTransactions`)
}