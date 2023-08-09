import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const SideNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHome = () => {
    navigate('/')
    handleClose()
  }
  const handleTaxCertificate = () => {
    navigate('/Certificate')
    handleClose()
  }
  
  const handleNewDonor = () => {
    navigate('/NewCustomer')
    handleClose()
  }

  const handleExistingDonor = () => {
    navigate('/ExistingCustomer')
    handleClose()
  }

  return (
    <>
      <Button
        id="side-navigation"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup={true}
        aria-expanded={open ? true : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: 'white' }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={handleNewDonor}>New Donor</MenuItem>
        <MenuItem onClick={handleExistingDonor}>Existing Donor</MenuItem>
        <MenuItem onClick={handleTaxCertificate}>Tax Certificate</MenuItem>
      </Menu>
    </>
  );
};
export default SideNavigation;