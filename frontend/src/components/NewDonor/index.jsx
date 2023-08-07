import React, { useState } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { addDonorInfo} from "../../services/ApiService";

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

const formatDateDDMMYYYY = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};

const NewDonor = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [pan, setPan] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionMode, setTransactionMode] = useState('UPI');
  const [date, setDate] = useState("");

  const handleTransactionModeChange = (e) => {
    setTransactionMode(e.target.value); // Update the state with the selected label
  };

  const addDonorDetails = (e) => {
      e.preventDefault();
    const data = {
      donorName : name,
      donorAddress : address,
      donorEmail: email,
      dateOfBirth : formatDateDDMMYYYY(dateOfBirth),
      donorPan : pan,
      transactions : [{
        amount : amount,
        transactionMode : transactionMode,
        transactionDate : formatDateDDMMYYYY(date)
      }]
    };
    console.log(data)
    addDonorInfo(data)
    .then(response => {
      console.log("Response : ", response);
      swal({
        title: `Hello !!`,
        text: "You have successfully added !",
        icon: "success",
        buttons: {
          Ok: { text: "Great !" },
        },
      });
    })
    .catch(error =>{
      console.log("Error : ", error);
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
            <center>New Donor</center>
          </h2>
          <hr style={{ width: "100%", borderTop: "2px solid grey" }}></hr>
          <form
          onSubmit={addDonorDetails}
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
                value={name}
                fullWidth
                required={true}
              />
              <TextField
                type="text"
                variant="filled"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                fullWidth
                required={true}
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
                required={true}
                sx={{
                  mb: 4,
                }}
              />
              <TextField
                type="date"
                variant="filled"
                label="Date of Birth"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                fullWidth
                required={true}
                sx={{
                  mb: 4,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>

            <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
              <TextField
                type="text"
                variant="filled"
                label="PAN"
                onChange={(e) => setPan(e.target.value)}
                value={pan}
                fullWidth
                required={true}
                sx={{
                  mb: 4,
                }}
              />

              <TextField
                type="number"
                variant="filled"
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                fullWidth
                required={true}
                sx={{
                  mb: 4,
                }}
              />
            </Stack>
            <Stack spacing={8} direction="row" sx={{ marginBottom: 0 }}>
              <TextField
                select
                required={true}
                label="Transaction mode"
                fullWidth
                variant="filled"
                value={transactionMode}
                onChange={handleTransactionModeChange}
                sx={{
                  mb: 4,
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                type="date"
                variant="filled"
                label="Transaction Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                fullWidth
                required={true}
                sx={{
                  mb: 4,
                }}
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
        <hr style={{ margin: "50px" }} />
        <p style={{textAlign:"center",color:"grey",fontSize:"20px",fontWeight:"bold"}}>Already exists? {" "}<Link to="/existingDonor">EXISTING DONOR</Link></p>
      </div>
    </React.Fragment>
  );
};

export default NewDonor;