import React, { useEffect, useState } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";


const addcustomerurl=`http://localhost:8080/api/v1/customer/addCustomer`;

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
  const [customer, setCustomer] = useState([]);
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [PAN, setPAN] = useState("");
  const [Amount, setAmount] = useState("");
  const [Transaction, setTransaction] = useState(options[0]);
  const [Date, setDate] = useState("");

 

  useEffect(() => {
    axios.get(addcustomerurl).then((response) => {
      setCustomer(response.data);
    });
  }, []);
  function createCustomer() {
    axios
      .post(addcustomerurl, {
        Name,Address,email,dateOfBirth,PAN,Amount,Transaction,Date
      })
      .then((response) => {
        setCustomer(response.data);
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    createCustomer();
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
      <div style={{padding:"50px"}}>
        <p style={{color:"grey",fontWeight:"bold",fontSize:"20px",marginLeft:"70px",marginRight:"70px"}}>
          DSF is a development organization working towards the goal of
          quality and equity in education and making a happy childhood a reality
          for the children. 
          The support from civil society that believes in the
          premise that, education is the most sustainable instrument in nation
          building and creating livelihoods, is crucial to make this mission a
          possibility. </p>
        <hr style={{ margin: "50px" }} />
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            width: "650px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

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
                  shrink: true,
                  disableUnderline: true,
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
                label="Transaction Date"
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
           onClick={handleSubmit} >
              Submit
            </Button>
          </form>
        </div>
        <hr style={{ margin: "50px" }} />
        <p style={{textAlign:"center",color:"grey",fontSize:"20px",fontWeight:"bold"}}>Already exists? {" "}<Link to="/existingCustomer">EXISTING CUSTOMER</Link></p>
      </div>
    </React.Fragment>
  );
};

export default NewCustomer;
