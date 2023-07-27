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

const EightyGCertificate = () => {
  const [donorId, setDonorId] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  let fl = false;
  const handleSubmit = (event) => {
    // fl =true;
    event.preventDefault();
    // Example data
    setName("John");
    setEmail("john23@example.com");
    setPan("ABCDE1234F");
    setIsSubmitted(true);
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
    setSelectedYear(event.target.value);
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
                            placeholder="Enter your Donor ID"
                            margin="normal"
                            variant="filled"
                            color="primary"
                            label="Donor-ID"
                            required
                            value={donorId}
                            onChange={(e) => setDonorId(e.target.value)}
                            InputProps={{ disableUnderline: true }}
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
                            value={selectedYear}
                            onChange={handleYearChange}
                            onSubmit={handleSubmit}
                            required
                            InputProps={{ disableUnderline: true }}
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
                {isSubmitted && <p style={{ color: "grey" }}>Email: {email}</p>}
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
