import React, { useState } from 'react';
import { TextField,  Button, MenuItem, Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
const options = [
  {
    label: "UPI",
    value: 1,
  },
  {
    label: "IMPS",
    value: 2,
  },
  {
    label: "DEBIT",
    value: 3,
  },
  {
    label: "CREDIT",
    value: 4,
  },
  {
    label: "NEFT",
    value: 5,
  },
];



const ExistingCostumerPage = () => {
  const [donorId, setDonorId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pan, setPan] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionMode, setTransactionMode] = useState('');
  const [date, setDate] = useState('');

  const fetchDonorDetails = async () => {
    try {
      // Replace with your actual API endpoint to fetch donor details
      const response = await fetch(`/api/donors?donorId=${donorId}&email=${email}`);
      const data = await response.json();
      if (data) {
        setName(data.name);
        setAddress(data.address);
        setPan(data.pan);
      }
    } catch (error) {
      console.error('Error fetching donor details:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setDate(''); 
    setTransactionMode('');
    setAmount('');
  
  };

  return (
    <React.Fragment>
    <div style={{ padding: "50px " }}>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          width: "800px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "6px",
          border: "3px solid grey",
        }}
      >
        <h2 style={{ color: "grey" }}>
          <center>Existing Customer</center>
        </h2>
        <hr style={{ width: "100%", borderTop: "2px solid grey" }}></hr>
        <form
            onSubmit={handleSubmit}
            style={{ color: "white" }}
          >
            
    <Grid container spacing={1}>
      <Grid item xs={12} >
        <TableContainer>
          <Table sx={{tableLayout: "auto"}}>
            <TableHead>
              <TableRow sx={{
        // backgroundColor: "white",
        borderBottom: "2px ",
        "& th": {
          fontSize: "1.10rem"
        
        }
      }}>
                <TableCell>Donor ID</TableCell>
                <TableCell>Email ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>PAN</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  
                  <TextField 
                 fullWidth required
                   placeholder="Your Donar-Id"
                   margin="normal"
                   variant="filled"
                   color="primary"
                   label="Donar-Id"
                    value={donorId}
                    onChange={(e) => setDonorId(e.target.value)}
                    
                      InputProps={{disableUnderline: true}}
                  />
                </TableCell>
                <TableCell>
                    
                  <TextField
                   fullWidth
                   placeholder="Your Email Id"
                   margin="normal"
                   variant="filled"
                   color="primary"
                   label="Email-Id"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   
                      InputProps={{disableUnderline: true}}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{address}</TableCell>
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
                marginTop:"1%",
                marginBottom: "1%",
                backgroundColor: "#1167b1",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              type="fetch details"
              onClick={fetchDonorDetails}
            >
              Fetch Details
            </Button>
      </Grid>

     
      <Grid xs={12} item >
      <TextField
                type="number"
                variant="filled"
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                fullWidth
                required
                sx={{
                  width: {sm: 750, md: 600},
                 mb:1
                }}
                InputProps={{disableUnderline: true}}
              />
      </Grid>
      <Grid item xs={12}>
      <TextField
                select
                required="true"
                label="Transaction mode"
                fullWidth
                variant="filled"
                value={transactionMode}
                sx={{
                  width: {sm: 750, md: 600},
                 mb:1
                }}
                InputProps={{disableUnderline: true}}
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
          required
          variant='filled'
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          sx={{
            width: {sm: 750, md: 600},
           mb:1
          }}
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{
            shrink: true, 
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
                backgroundColor: "#1167b1",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              type="submit"
              onClick={handleSubmit}
            >Submit
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