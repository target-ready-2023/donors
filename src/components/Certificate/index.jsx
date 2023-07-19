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
    // Example data
    setName('John'); 
    setEmail('john23@example.com'); 
    setPan('ABCDE1234F'); 
  };

  // Generate an array of years
  const startYear = 2000;
  const endYear = 2060;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(`FY${year}-${year + 1}`);
  }

  return (
    <div style={{ backgroundColor: '#0f3923',
     height: '100vh',
     margin: '65px' }}>
      <h1 style={{ color: 'white' }}>80G Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: 'white' }}>
            <span style={{marginRight:'5px'}}>Donor ID:</span>
            <input type="text" value={donorId} onChange={handleDonorIdChange} />
          </label>
          
          <label style={{ color: 'white' }}>
          <span style={{marginLeft:'5px'}}>Fiscal Year:</span>
            <select value={fiscalYear} onChange={handleFiscalYearChange}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p style={{ marginTop: '40px', color: 'white' }}>Name: {name}</p>
        <p style={{ color: 'white' }}>Email: {email}</p>
        <p style={{ color: 'white' }}>PAN: {pan}</p>

        <br/>
        <br/>
        <br/>
        <p style={{ color: 'white' }}>Click the SUBMIT button to send a copy of 80G Certificate to your email-id</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EightyGCertificate;
