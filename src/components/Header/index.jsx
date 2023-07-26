import { Toolbar, AppBar, Typography } from "@mui/material";
import Logo from "../Logo";

const Header = (props) => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#6c88c8" }}>
      <Toolbar>
        <Typography style={{marginRight:"300px",marginLeft:"100px"}}>
          <Logo />
        </Typography>
        <Typography color="white" fontSize="30px"  style={{marginRight:"300px"}}>
          Dream School Foundation
        </Typography>
        <Typography color="white" fontSize="30px" >
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
