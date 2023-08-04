import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import imga from "../../images/img1.jpeg";
import imgb from "../../images/img2.jpeg";
import imgc from "../../images/img3.jpeg";
function Homef() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{paddingBottom:'30px',paddingTop:'30px',paddingLeft:"110px",backgroundColor:"#a9b8c3"}}>
        <h1 style={{color:"#6c88c8",textAlign:"center",paddingBottom:'15px'}}>Giving is not just about making a donation. It is about making a difference.”</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={imgb}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DONATE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your donations will help us support the education of our
                children and the School Development programmes. Please refer the
                programme section
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/newCustomer" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "0px",
                    marginBottom: "10px",
                    marginLeft:"60px",
                    width: "200px",
                  }}
                >
                  New Customer
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={imgc}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DONATE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dream School Foundation is an Indian Registered Trust and
                donations made to DSF are exempt from tax under Section 80G of
                the Income Tax Act.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/existingCustomer" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "0px",
                    marginBottom: "10px",
                    width: "200px",
                    marginLeft:"60px"
                  }}
                >
                  Existing Customer
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={imga}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tax Preparation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dream School Foundation is an Indian Registered Trust and
                donations made to DSF are exempt from tax under Section 80G of
                the Income Tax Act.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/certificate" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "0px",
                    marginBottom: "10px",
                    width: "200px",
                    marginLeft:"60px",
                  }}
                >
                  80G Certificate
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Homef;