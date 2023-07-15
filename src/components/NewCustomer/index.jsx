import React, { useState } from "react";
import { TextField, Button, Stack,MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const options = [
    {
      label: "UPI",
      value: 1
    },
    {
      label: "DEBIT CARD",
      value: 2
    },
    {
      label: "NET BANKING",
      value: 3
    }
  ]
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
      <div
        style={{
            
          marginLeft: "400px",
          marginTop: "5%",
         
          display: "flex",
          width: "800px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "10px",
          border: "3px solid",
        //   marginBottom:"100%",// look into that
        }}
      >
        <h2 style={{color:"white"}}>
          <center>New Customer</center>
        </h2>
        <hr style={{ width: "100%", borderTop: "3px solid black" }}></hr>
        <form onSubmit={handleSubmit} action={<Link to="/existingCustomer" />}>
          <Stack
            spacing={8}
            direction="row"
            sx={{ marginTop: 4, marginBottom: 4 }}
          >
            <TextField
              type="text"
              variant="outlined"
              style={{ color:"#6c88c8"}}
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              style={{ Color: "#6c88c8" }}
              label="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={Address}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
            <TextField
              type="email"
              variant="outlined"
              style={{ Color: "#6c88c8" }}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              type="date"
              variant="outlined"
              style={{ Color: "#6c88c8" }}
              label="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
          </Stack>
          <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
            <TextField
              type="text"
              variant="outlined"
              style={{ Color: "#6c88c8" }}
              label="PAN"
              onChange={(e) => setPAN(e.target.value)}
              value={PAN}
              fullWidth
              required
              sx={{ mb: 4 }}
            />

            <TextField
              type="number"
              variant="outlined"
              style={{ Color: "#6c88c8" }}
              label="Amount"
              onChange={(e) => setAmount(e.target.value)}
              value={Amount}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
          </Stack>
          <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
          <TextField  select required="true"  label="Transaction mode"  fullWidth  sx={{ mb: 4 }}   variant="outlined"
              style={{ Color: "#6c88c8" }}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}</TextField>
            <TextField
              type="date"
              variant="outlined"
              style={{ Color: "#6c88c8" }}
              label="Date"
              onChange={(e) => setDate(e.target.value)}
              value={Date}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
          </Stack>
          <Button
            variant="outlined"
            style={{ color: "white", marginLeft: "4%", marginBottom: "5%",backgroundColor:"blue",paddingLeft:"30px",paddingRight:"30px" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewCustomer;
