import React, { Fragment, useState } from "react";
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
import swal from "sweetalert";
import { getCertificate, getDonorDetailsById } from "../../services/ApiService";

const EightyGCertificate = () => {
  const [fiscalYear, setFiscalYear] = useState("");
  const [name, setName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [pan, setPan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("DonorEmail : ", donorEmail);
    getDonorDetailsById(donorEmail)
    .then(response => {
      setIsSubmitted(true);
      console.log("response : ", response.data);
      setName(response.data.donorName);
      setPan(response.data.donorPan);
    })
    .catch(error => {
      console.log("Error : ", error);
    });

    getCertificate(donorEmail, fiscalYear)
    .then(response => {
      console.log("response : ", response.data);
      swal({
        title: `Hello !!`,
        text: "Your Certificate is sent to your Respective email ID!",
        icon: "success",
        buttons: {
          Ok: { text: "Great !" },
        },
      });
    })
    .catch(error => {
      console.log("Error : ", error);
      swal({
        title: `Oops!!`,
        text: "Failed to send certificate with Email, Try again!",
        icon: "error",
        buttons: {
          Ok: { text: "Ok" },
        },
      });
    });
  };

  function generateFiscalYearsArray(startYear, endYear) {
    const fiscalYears = [];
    for (let year = startYear; year <= endYear; year++) {
      fiscalYears.push(`FY${year}-${year + 1}`);
    }
    return fiscalYears;
  }

  const startYear = 1900;
  const endYear = new Date().getFullYear();

  const years = generateFiscalYearsArray(startYear, endYear);

  const handleYearChange = (event) => {
    setFiscalYear(event.target.value);
  };
  return (
    <Fragment>
      <div style={{ padding: "110px " }}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            width: "800px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "10px",
            border: "3px solid grey",
          }}
        >
          <h2 style={{ color: "grey" }}>
            <center>80G Certificate</center>
          </h2>
          <hr style={{ width: "100%", borderTop: "3px solid grey" }}></hr>
          <form onSubmit={handleSubmit} style={{ color: "grey" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TableContainer>
                  <Table sx={{ tableLayout: "auto" }}>
                    <TableHead>
                      <TableRow
                        sx={{
                          borderBottom: "2px",
                          "& th": {
                            fontSize: "1.10rem",
                          },
                        }}
                      ></TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <TextField
                            fullWidth
                            type="email"
                            placeholder="Enter your Registered Email ID"
                            margin="normal"
                            variant="filled"
                            color="primary"
                            label="Email ID"
                            required={true}
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            margin="normal"
                            variant="filled"
                            color="primary"
                            select
                            label="Select Year"
                            value={fiscalYear}
                            onChange={handleYearChange}
                            onSubmit={handleSubmit}
                            required={true}
                          >
                            {years.map((year) => (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            ))}
                          </TextField>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12}>
                {isSubmitted && (
                  <p style={{ marginTop: "40px", color: "grey" }}>
                    Name:
                    {name}
                  </p>
                )}
                {isSubmitted && <p style={{ color: "grey" }}>Email: {donorEmail}</p>}
                {isSubmitted && <p style={{ color: "grey" }}>PAN: {pan}</p>}
                <br />
                <br />
                <br />
                <p style={{ color: "grey" }}>
                  Click the SUBMIT button to send a copy of 80G Certificate to
                  your email-id
                </p>
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
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default EightyGCertificate;