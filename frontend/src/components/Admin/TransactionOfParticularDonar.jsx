import React, { useState, useEffect } from "react";
import axios from 'axios';
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



const AllDonar = () => {
  
  const [InvoiceID, setInvoiceID] = useState("");
  const [TransactionId, setTransactionId] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [amount, setAmount] = useState("");
  const [TransactionMode, setTransactionMode] = useState("");

  
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
             style={{
                // color: "white",
                // marginLeft: "1%",
                // marginTop: "1%",
                // marginBottom: "10px",
                // backgroundColor: "gray",
                //  : '#1167b1',
                // paddingLeft: "30px",
                // paddingRight: "30px",
              }}
                          type="email"
                          fullWidth
                          placeholder="Your Email Id"
                          margin="normal"
                          variant="filled"
                          color="primary"
                          label="Email-Id"
                          required={true}
                        //   value={donorEmail}
                        //   onChange={(e) => setDonorEmail(e.target.value)}
                        //   error={donorEmail !== "" && !isEmailValid(donorEmail)}
                        //   helperText={
                        //     donorEmail !== "" && !isEmailValid(donorEmail)
                        //       ? "Invalid email format"
                        //       : ""
                        //   }
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
                // disabled={isSubmitDisabled}
                // onClick={fetchDetails}
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
                  
                      
                      <TableCell>Transaction Id</TableCell>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell>Transaction Date</TableCell>
                      <TableCell>Transaction Mode</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                    <TableCell>{TransactionId}</TableCell>
                      <TableCell>{InvoiceID}</TableCell>
                    
                      <TableCell>{transactionDate}</TableCell>
                      <TableCell>{TransactionMode}</TableCell>
                      <TableCell>{amount}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllDonar;
