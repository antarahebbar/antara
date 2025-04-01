import { Button, Box, Container, Grid } from "@mui/material";
import div from "../assets/images/div.svg";
import cat from "../assets/images/cat.svg";
import flower from "../assets/images/flower.svg";
import house from "../assets/images/house.svg";
import person from "../assets/images/person.svg";
import "../assets/css/header.css";
import Spacer from "../components/resuable"

function Header() {
  return (
    <Grid container spacing={2}>
      <Spacer space={1} />
      <Grid size={10}>
        <Box component="header" class="header">
        {/* Cat icon */}
          <div>
            <img src={cat} alt="cat_icon" style={{ width: 45, height: 45 }} />
          </div>
          <Box component="nav" display="flex" flexDirection="row">
            <NavItem label="Home" icon={house} isActive={true} />
            <NavItem label="Me" icon={person} />
            <NavItem label="Build" icon={div} />
            <NavItem label="Fun" icon={flower} />
          </Box>
        </Box>
      </Grid>
      <Spacer space={1} />
    </Grid>
  );
}

// Reusable Navigation Item Component
const NavItem = ({ label, icon }) => {
  return (
    <Button
      variant="outlined"
      endIcon={<img src={icon} alt="icon" style={{ width: 20, height: 20 }} />}
      sx={{
        border: "none",
        color: "#8e4585",
        borderRadius: "50px",
        marginRight: 2,
        textTransform: "none",
        fontSize: "18px",
      }}
    >
      {label}
    </Button>
  );
};

export default Header;
