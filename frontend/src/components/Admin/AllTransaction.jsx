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



const AllTransaction = () => {
  const [name, setName] = useState("");
  const [invoiceID, setinvoiceID] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [fiscalYear, setFiscalYear] = useState("");
  const [email,setEmail]=useState("");
  
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
            <center>All Transaction Details</center>
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
                   
                      <TableCell>Invoice ID</TableCell>
                      <TableCell>Transaction Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email Id</TableCell>
                      <TableCell>Transaction Date</TableCell>
                      <TableCell>Fiscal Year</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                    <TableRow>
                    <TableCell>{invoiceID}</TableCell>
                    <TableCell>{transactionId}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{transactionDate}</TableCell>
                      <TableCell>{fiscalYear}</TableCell>
                    </TableRow>
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
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllTransaction;