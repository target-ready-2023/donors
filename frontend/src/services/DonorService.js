import axios from 'axios';

const DONOR_API_BASE_URL = "http://localhost:8080/api/donor";

class DonorService{
    getDonors(){
        return axios.get(DONOR_API_BASE_URL + '/getAllDonors');
    }

    createDonor(donor){
        return axios.post(DONOR_API_BASE_URL + '/addDonor', donor);
    }

    getDonorByEmail(donorEmail){
        return axios.get(DONOR_API_BASE_URL + '/findByEmail', donorEmail);
    }
}

export default new DonorService();