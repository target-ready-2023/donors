// import Logo from "../Logo";
// import SideNavigation from "../SideNavigation";
import { Toolbar, AppBar, Typography } from "@mui/material";
import Logo from "../Logo";

const Header = (props) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#6c88c8' }}>
     
      <Toolbar>
       
        <Typography>
        <Logo/>
        </Typography>
        <Typography variant="h3"  marginLeft="50px"  color="white">
        Dream School Foundation 
        </Typography>
        <Typography variant="h4" marginLeft="100px" color="white" >
          {props.title}
        </Typography>
       
       
      
         
        
      </Toolbar>
    </AppBar>
  );
};
export default Header;
