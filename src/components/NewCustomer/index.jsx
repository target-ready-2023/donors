import React, { useState } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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
    setName("");
    setAddress("");
    setEmail("");
    setDateOfBirth("");
    setPAN("");
    setDate("");
    setAmount("");
    setTransaction(options[0]);
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
    swal({
      title: `Hello !!`,
      text: "You have successfully added !",
      icon: "success",
      buttons: {
        Ok: { text: "Great !" },
      },
    });
  }

  return (
    <React.Fragment>
      <div style={{ padding: "90px " }}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            width: "650px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            border: "3px solid grey",
          }}
        >
          <h2 style={{ color: "grey" }}>
            <center>New Customer</center>
          </h2>
          <hr style={{ width: "100%", borderTop: "2px solid grey" }}></hr>
          <form
            onSubmit={handleSubmit}
            action={<Link to="/existingCustomer" />}
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
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                type="text"
                variant="filled"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
                fullWidth
                required
                InputProps={{ disableUnderline: true }}
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
                  mb: 4,
                }}
                InputProps={{ disableUnderline: true }}
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
                  mb: 4,
                }}
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true, disableUnderline: true 
                }}
              
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
                  mb: 4,
                }}
                InputProps={{ disableUnderline: true }}
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
                  mb: 4,
                }}
                InputProps={{ disableUnderline: true }}
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
                  mb: 4,
                }}
                InputProps={{ disableUnderline: true }}
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
                  mb: 4,
                }}
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <Button
              variant="outlined"
              style={{
                color: "white",
                marginLeft: "4%",
                marginBottom: "5%",
                backgroundColor: "#1167b1",
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
