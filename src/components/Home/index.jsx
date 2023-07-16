import Logo from "../Logo";
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';


const Home = () => {
    return (
        <Grid container spacing={2} columns={16} style={{ padding: '154px' }}>
            <Grid item xs={8} >
                <div
                    style={{
                        display: "flex",
                        textAlign: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "300px",
                        margin: "0 auto",
                    }}
                >
                    <Logo />
                    <h1 style={{ marginTop: "20px", marginBottom: "40px",color:"white" }}>
                        Dream School Foundation
                    </h1>
                    <p style={{ marginBottom: "20px",color:"white" }}>
                        Established in Banglore by a group of passionate volunteers
                    </p>
                    <h3 style={{ marginTop: "10px", marginBottom: "10px" ,color:"white"}}>
                        CONTACT US
                    </h3>
                    <hr style={{ width: "100%", borderTop: "3px solid white" }}></hr>
                    <p style={{ fontWeight: "bold", marginTop: "10px 0",color:"white" }}>
                        123, Hennur Road, Banglore
                        <br />
                        Phone: +91-1234567890
                    </p>
                </div>
            </Grid>
            <Grid item xs={8} sx={{ alignItems: 'center', justifyContent: 'center',  }}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <div style={{
                        display:'flex',
                        width:'300px',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center', borderRadius: "10px",  padding: '10px', border:'3px solid white', marginBottom:'40px'
                    }} >
                        <h2 style={{color:"white"}}>DONATE</h2>
                        <hr style={{ width: "100%", borderTop: "3px solid white" }}></hr>
                        <Link to="/newCustomer" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ borderRadius: '20px', marginBottom: '10px', width:'200px'}} >
                                New Customer
                            </Button>
                        </Link>
                        <Link to="/existingCustomer" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ borderRadius: '20px', width:'200px'}}>
                                Existing Customer
                            </Button>
                        </Link>

                    </div>
                    <div style={{
                        width:'300px',
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center', borderRadius: "10px",  padding: '10px', border:'3px solid white'
                    }} >
                        <h2 style={{color:"white"}}>Tax Preperation</h2>
                        <hr style={{ width: "100%", borderTop: "3px solid white" }}></hr>
                        <Link to="/certificate" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ borderRadius: '20px', marginBottom: '10px', width:'200px'}} >
                                80G Certificate
                            </Button>
                        </Link>
                        <p style={{fontWeight:'bold',color:"white"}}>We prepare everything for your tax need</p>
                       
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};
export default Home;