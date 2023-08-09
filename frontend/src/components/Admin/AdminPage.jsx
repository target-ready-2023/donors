import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

const AdminPage = () => {
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
            <center>Admin Services</center>
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

                      <TableCell>
                        <Link to="/admin/allDonor" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "0px",
                              marginBottom: "10px",
                              marginLeft: "60px",
                              width: "200px",
                            }}
                          >
                            All Donor Details
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          to="/admin/allTransaction"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "0px",
                              marginBottom: "10px",
                              marginLeft: "60px",
                              width: "200px",
                            }}
                          >
                            All Transaction Details
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          to="/admin/transactionOfParticularEmail"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "0px",
                              marginBottom: "10px",
                              marginLeft: "60px",
                              width: "200px",
                            }}
                          >
                            Transaction of a Particular Donor
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
