// import Logo from "../Logo";
// import SideNavigation from "../SideNavigation";
import { Toolbar, AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#6c88c8' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Donors
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
