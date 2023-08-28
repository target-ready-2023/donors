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

import {getAllTransactionOfParticularDonor} from "../../services/ApiService"

   const SingleDonor = () => {
  const [donorEmail, setDonorEmail] = useState("");
  
  const isEmailValid = (donorEmail) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(donorEmail);
  };
  const [getAllTransaction,setGetAllTransaction] = useState([]);
  const fetchDetails = (event) => {
    event.preventDefault();
    console.log("Donor Email : ", donorEmail);
    getAllTransactionOfParticularDonor(donorEmail)
    .then(response => {
      setGetAllTransaction(response.data);
      console.log("response : ", response.data);
     
    },[setGetAllTransaction])
    
  }

  const allTrans = getAllTransaction.map((donar) => (
    <>
    <TableBody>
                    <TableRow>
                    <TableCell>{donar.donorName}</TableCell>
                      {/* <TableCell>{donar.donorEmail}</TableCell> */}
                      <TableCell>{donar.transactionId}</TableCell>
                      <TableCell>{donar.invoiceId}</TableCell>
                     
                      {/* <TableCell>{transactionDate}</TableCell> */}
                      <TableCell>{donar.transactionDate}</TableCell>
                      <TableCell>{donar.transactionMode}</TableCell>
                      <TableCell>{donar.amount}</TableCell>
                    </TableRow>
                  </TableBody>
  </>
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
            </center>
            <center>
            {/* <Grid item xs={12}> */}
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  marginLeft: "1%",
                  marginTop: "10%",
                  marginBottom: "10px",
                  backgroundColor: "gray",
                  //  : '#1167b1',
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                type="submit"
                onClick={fetchDetails}
              >
                Fetch Details
              </Button>
            {/* </Grid> */}
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
                      {/* <TableCell sx={{ width: "30%" }}>Email ID</TableCell> */}
                  
                      <TableCell>Name</TableCell>
                      <TableCell>Transaction Id</TableCell>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell>Transaction Date</TableCell>
                      <TableCell>Transaction Mode</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  {allTrans}
                </Table>
              </TableContainer>
            </Grid>
            
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleDonor;