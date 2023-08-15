import React, { useState,useEffect } from "react";
import swal from "sweetalert";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { addTransactionInfo, getDonorDetailsById } from "../../services/ApiService";

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



const ExistingDonorPage = () => {
  const [donorEmail, setDonorEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionMode, setTransactionMode] = useState('UPI');
  const [date, setDate] = useState(new Date());

  const handleTransactionModeChange = (e) => {
    setTransactionMode(e.target.value); // Update the state with the selected label
  };
  const isEmailValid = (donorEmail) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(donorEmail);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const fetchDetails = (event) => {
    event.preventDefault();
    console.log("Donor Email : ", donorEmail);
    getDonorDetailsById(donorEmail)
    .then(response => {
      console.log("response : ", response.data);
      setName(response.data.donorName);
      setPan(response.data.donorPan);
      setAddress(response.data.donorAddress);
    })
    .catch(error => {
      console.log("Error : ", error);
    });
  }

  const addTransactionDetails= (e) => {
    e.preventDefault();
    const data = {
      transactionDetails :{
        amount : amount,
        transactionMode : transactionMode,
        transactionDate : formatDate(date)
      },
      email : donorEmail
    };
    console.log(data)
    addTransactionInfo(data)
    .then(response => {
      console.log("Response : ", response);
      swal({
        title: `Hello !!`,
        text: "You transaction is successfully added !",
        icon: "success",
        buttons: {
          Ok: { text: "Great !" },
        },
      });
    })
    .catch(error =>{
      console.log("Error : ", error);
      swal({
        title: `Oops!!`,
        text: "Error while adding transaction !",
        icon: "error",
        buttons: {
          Ok: { text: "Try next Time!" },
        },
      });
    });
  }

  const isSubmitDisabled = donorEmail === '' || !isEmailValid(donorEmail);

  return (
    <React.Fragment>
      <div style={{ padding: "50px " }}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            width: "1000px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "6px",
            border: "3px solid grey",
          }}
        >
          <h2 style={{ color: "grey" }}>
            <center>Existing Donor</center>
          </h2>
          <hr style={{ width: "100%", borderTop: "2px solid grey" }}></hr>
          <Grid container spacing={1}>
            <Grid item xs={16}>
              <TableContainer>
                <Table sx={{ tableLayout: "auto" }}>
                  <TableHead>
                    <TableRow
                      sx={{
                        borderBottom: "2px ",
                        "& th": {
                          fontSize: "1.10rem",
                        },
                      }}
                    >
                      <TableCell sx={{ width: "30%" }}>Email ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>PAN</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <TextField
                          type="email"
                          fullWidth
                          placeholder="Your Email Id"
                          margin="normal"
                          variant="filled"
                          color="primary"
                          label="Email-Id"
                          required={true}
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          error={donorEmail !== "" && !isEmailValid(donorEmail)}
                          helperText={
                            donorEmail !== "" && !isEmailValid(donorEmail)
                              ? "Invalid email format"
                              : ""
                          }
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
                  marginTop: "1%",
                  marginBottom: "1%",
                  backgroundColor: isSubmitDisabled ? 'gray' : '#1167b1',
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                type="submit"
                disabled={isSubmitDisabled}
                onClick={fetchDetails}
              >
                Fetch Details
              </Button>
            </Grid>

            <Grid xs={12} item>
              <TextField
                type="number"
                variant="filled"
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                fullWidth
                required
                sx={{
                  width: { sm: 750, md: 600 },
                  mb: 1,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                required={true}
                label="Transaction mode"
                fullWidth
                variant="filled"
                onChange={handleTransactionModeChange}
                value={transactionMode}
                sx={{
                  width: { sm: 750, md: 600 },
                  mb: 1,
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                // type="date"
                required={true}
                variant="filled"
                label="Date"
                value={date.toLocaleDateString('en-GB')}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                sx={{
                  width: { sm: 750, md: 600 },
                  mb: 1,
                }}
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
                onClick={addTransactionDetails}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExistingDonorPage;
