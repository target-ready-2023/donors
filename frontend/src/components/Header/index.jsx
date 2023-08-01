import { Toolbar, AppBar, Typography } from "@mui/material";
import Logo from "../Logo";
import {Link} from "react-router-dom";
import SideNavigation from "../SideNavigation";

const Header = (props) => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#6c88c8" }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography style={{marginRight:"300px",marginLeft:"100px"}}>
          <Link to="/"><Logo /></Link>
        </Typography>
        <Typography color="white" fontSize="30px" style={{marginRight:"300px"}}>
          Dream School Foundation
        </Typography>
        <Typography color="white" fontSize="30px" >
          {props.title}
        </Typography>
        <Typography><SideNavigation /></Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;