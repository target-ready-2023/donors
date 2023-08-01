import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
          <hr/>
            <Typography variant="body2" color="text.secondary">
              Dream School Foundation was established in Bangalore, India in
              2005 by a group of passionate volunteers. Through our work, we
              strive to break the cycle of the socio- economic vulnerability of
              children and families, and help them to help themselves, through
              equity and quality in education.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <hr/>
            <Typography variant="body2" color="text.secondary">
            123, Hennur Road, Banglore
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@dsfindia.org
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Phone: +91 98440 60478
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <hr/>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}
            {" "}
            <Link color="inherit" href="https://www.dsfindia.org/">
              Dream School Foundation.
            </Link>{" "}
            All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}