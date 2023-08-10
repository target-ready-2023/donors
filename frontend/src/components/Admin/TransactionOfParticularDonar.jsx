import React, { useState } from "react";

import {
  TextField,
  Button,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { getAllTransactionOfParticularDonor } from "../../services/ApiService";

const ParticularDonar = () => {
  const [donorEmail, setDonorEmail] = useState("");
  const [getAllTransaction, setGetAllTransaction] = useState([]);

  const isEmailValid = (donorEmail) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(donorEmail);
  };

  const fetchDetails = (event) => {
    event.preventDefault();
    console.log("Donor Email : ", donorEmail);
    getAllTransactionOfParticularDonor(donorEmail)
      .then((response) => {
        setGetAllTransaction(response.data);
        console.log("response : ", response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const allTrans = getAllTransaction.map((transaction) => (
    <TableRow key={transaction.transactionId}>
      <TableCell>{transaction.donorName}</TableCell>
      <TableCell>{transaction.transactionId}</TableCell>
      <TableCell>{transaction.invoiceId}</TableCell>
      <TableCell>{transaction.transactionDate}</TableCell>
      <TableCell>{transaction.transactionMode}</TableCell>
      <TableCell>{transaction.amount}</TableCell>
    </TableRow>
  ));

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
            <center>View Transactions of a Particular Donor</center>
          </h2>
          <hr style={{ width: "100%", borderTop: "2px solid grey" }}></hr>
          <h2 style={{ color: "grey" }}>
            <center>
              <TextField
                // ... other props
                label="Email-Id" // Make sure this label matches the one you're trying to find in the test
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
              
            </center>
            <center>
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  marginLeft: "1%",
                  marginTop: "10%",
                  marginBottom: "10px",
                  backgroundColor: "gray",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                type="submit"
                onClick={fetchDetails}
              >
                Fetch Details
              </Button>
            </center>
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
                      <TableCell>Name</TableCell>
                      <TableCell>Transaction Id</TableCell>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell>Transaction Date</TableCell>
                      <TableCell>Transaction Mode</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{allTrans}</TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParticularDonar;
