// import Logo from "../Logo";
// import SideNavigation from "../SideNavigation";
import { Toolbar, AppBar, Typography } from "@mui/material";

const Header = (props) => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h4" marginLeft="100px" color="#6c88c8" >
          {props.title}
         
        </Typography>
        <Typography variant="h3"  marginLeft="350px"  color="#6c88c8">
          Dream School Foundation
         
        </Typography>
       
      
         
        
      </Toolbar>
    </AppBar>
  );
};
export default Header;
