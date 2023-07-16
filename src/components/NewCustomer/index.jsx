import React, { useState } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

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


const NewCustomer = () => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [PAN, setPAN] = useState("");
  const [Amount, setAmount] = useState("");
  const [Transaction, setTransaction] = useState(options[0]);
  const [Date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      Name,
      Address,
      email,
      dateOfBirth,
      PAN,
      Amount,
      Transaction,
      Date
    );
  }

  return (
    <React.Fragment>
      <div style={{ padding: "90px " }}>
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
            <center>New Customer</center>
          </h2>
          <hr style={{ width: "100%", borderTop: "3px solid white" }}></hr>
          <form
            onSubmit={handleSubmit}
            action={<Link to="/existingCustomer" />}
            style={{ color: "white" }}
          >
            <Stack
              spacing={8}
              direction="row"
              sx={{ marginTop: 4, marginBottom: 4 }}
            >
              <TextField
                type="text"
                variant="filled"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1}
                }}
                InputProps={{disableUnderline: true}}
              />
              <TextField
                type="text"
                variant="filled"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1}
                }}
                InputProps={{disableUnderline: true}}
              />
            </Stack>
            <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
              <TextField
                type="email"
                variant="filled"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1},mb:4
                }}
                InputProps={{disableUnderline: true}}
              />
              <TextField
                type="date"
                variant="filled"
                label="Date of Birth"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1},mb:4
                }}
                InputProps={{disableUnderline: true}}
              />
            </Stack>
            <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
              <TextField
                type="text"
                variant="filled"
      
                label="PAN"
                onChange={(e) => setPAN(e.target.value)}
                value={PAN}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '2px solid white', borderRadius: 1},mb:4
                }}
              />

              <TextField
                type="number"
                variant="filled"
            
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={Amount}
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {color: 'white', borderRadius: 1,},
                  "& .MuiFilledInput-input": {border: '3px solid white', borderRadius: 1},mb:4
                }}
              />
            </Stack>
            <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
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
            </Stack>
            <Button
              variant="outlined"
              style={{
                color: "white",
                marginLeft: "4%",
                marginBottom: "5%",
                backgroundColor: "blue",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewCustomer;
