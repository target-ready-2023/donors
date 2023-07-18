
import React, { useState } from 'react';

const EightyGCertificate = () => {
  const [donorId, setDonorId] = useState('');
  const [fiscalYear, setFiscalYear] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');

  const handleDonorIdChange = (event) => {
    setDonorId(event.target.value);
  };

  const handleFiscalYearChange = (event) => {
    setFiscalYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the form data here
    setName('John Doe'); // Example data, replace with your logic to retrieve name
    setEmail('johndoe@example.com'); // Example data, replace with your logic to retrieve email
    setPan('ABCDE1234F'); // Example data, replace with your logic to retrieve PAN
  };

  return (
    <div>
    <div style={{ backgroundColor: '#0f3923', 
    height:'100vh',
    margin:'65px'}}>
      
      <h1>80G Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: 'white' }}>
           <span style={{marginRight:'5px'}}> Donor ID: </span>
            <input type="text" value={donorId} onChange={handleDonorIdChange} style={{marginRight:'15px'}} />
          
            <span style={{marginLeft:'5px'}}>Fiscal Year:</span>
            <input type="text" value={fiscalYear} onChange={handleFiscalYearChange} style={{marginLeft:'15px'}} />
          </label>
        </div>
        <p style={{marginTop: '40px', color: 'white'}}>Name: {name}</p>
        <p style={{ color: 'white' }}>Email: {email}</p>
        <p style={{ color: 'white' }}>PAN: {pan}</p>

        <br/>
        <br/>
        <br/>

        <p style={{ color: 'white' }}>Click the SUBMIT button to send a copy of 80G Certificate to your email-id</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
};

export default EightyGCertificate;
