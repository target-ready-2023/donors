import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
const options = [
  {
    label: "UPI",
    value: 1,
  },
  {
    label: "DEBIT CARD",
    value: 2,
  },
  {
    label: "NET BANKING",
    value: 3,
  },
];



const ExistingCostumerPage = () => {
  const [donorId, setDonorId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [pan, setPan] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionMode, setTransactionMode] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  const fetchDonorDetails = async () => {
    try {
      // Replace with your actual API endpoint to fetch donor details
      const response = await fetch(`/api/donors?donorId=${donorId}&email=${email}`);
      const data = await response.json();
      if (data) {
        setName(data.name);
        setAddress(data.address);
        setDateOfBirth(data.dateOfBirth);
        setPan(data.pan);
      }
    } catch (error) {
      console.error('Error fetching donor details:', error);
      // Handle error
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any required logic or API calls with the transaction details

    setName('John'); 
    setAddress('target,Banglore');
    setDateOfBirth('05/10/2001');
    setPan('ABCDE1234F');
    
    setDetails(fetchDonorDetails);
    
    setDate(''); 
    setTransactionMode('');
    setAmount('');
  
  };

  return (
    <React.Fragment>
    <div style={{ padding: "70px " }}>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          width: "800px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "10px",
          border: "3px solid white",
        }}
      >
        <h2 style={{ color: "white" }}>
          <center>Existing Customer</center>
        </h2>
        <hr style={{ width: "100%", borderTop: "3px solid white" }}></hr>
        <form
            onSubmit={handleSubmit}
            style={{ color: "white" }}
          >
            
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TableContainer>
          <Table sx={{tableLayout: "auto"}}>
            <TableHead>
              <TableRow sx={{
        backgroundColor: "white",
        borderBottom: "2px white",
        "& th": {
          fontSize: "1.10rem",
          color: "black"
        }
      }}>
                <TableCell>Donor ID</TableCell>
                <TableCell>Email ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>PAN</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  
                  <TextField 
                 fullWidth
                   placeholder="Enter your Donar Id"
                   margin="normal"
                   variant="filled"
                   color="primary"
                   label="Donar-Id"
                    required
                    value={donorId}
                    onChange={(e) => setDonorId(e.target.value)}
                    sx={{
                        "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                        "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1}
                      }}
                      InputProps={{disableUnderline: true}}
                  />
                </TableCell>
                <TableCell>
                    
                  <TextField
                   fullWidth
                   placeholder="Enter your Email Id"
                   margin="normal"
                   variant="filled"
                   color="primary"
                   label="Email-Id"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                        "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1}
                      }}
                      InputProps={{disableUnderline: true}}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{dateOfBirth}</TableCell>
                <TableCell>{pan}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
      <Button
              variant="outlined"
              style={{
                color: "white",
                marginLeft: "1%",
                marginBottom: "1%",
                backgroundColor: "blue",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              type="fetch details"
              onClick={fetchDonorDetails}
            >
              Fetch Details
            </Button>
      </Grid>
      <Grid item xs={12}>
      <TextField
                type="number"
                variant="filled"
            
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '3px solid white', borderRadius: 1},mb:4
                }}
              />
      </Grid>
      <Grid item xs={12}>
      <TextField
                select
                required="true"
                label="Transaction mode"
                fullWidth
                variant="filled"
             
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1},mb:4
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
      </Grid>
      <Grid item xs={12}>
      <TextField
                type="date"
              
                variant="filled"
                label="Date"
                onChange={(e) => setDate(e.target.value)}
                value={Date}
                fullWidth
                required
                
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1},mb:4
                }}
              />
      </Grid>
      <Grid item xs={12}>
      <Button
              variant="outlined"
              style={{
                color: "white",
                marginLeft: "2%",
                marginBottom: "2%",
                backgroundColor: "blue",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
      </Grid>
    </Grid>
    </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExistingCostumerPage;