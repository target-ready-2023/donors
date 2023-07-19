import { Box } from "@mui/material";
import DSF from "../../images/DSF_Logo.png";
const Logo = () => {
  return (
    <Box sx={{ width: 100, height: 100, bgcolor:'#0f3923', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
      <img src={DSF} alt="logo" className="App-logo" title="Donors Logo" style={{ maxWidth: '100%', maxHeight: '100%' }}  />
    </Box>
    
  );
};
export default Logo;
