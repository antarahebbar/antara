import { Box, IconButton, Text } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as GitSVG } from "../assets/images/git.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";
import "../assets/css/footer.css";

const GitIcon = () => <SvgIcon component={GitSVG} inheritViewBox />;
const LinkedinIcon = () => <SvgIcon component={Linkedin} inheritViewBox />;
const InstagramIcon = () => <SvgIcon component={Instagram} inheritViewBox />;

function Footer() {
  return (
    <Box class="footer">
      <Box class="footer-icons" display="flex" flexDirection="row">
        <FooterItem icon={LinkedinIcon} />
        <FooterItem icon={GitIcon} />
        <FooterItem icon={InstagramIcon} />
      </Box>
      <div>2025, Antara Hebbar.</div>
    </Box>
  );
}

const FooterItem = ({ icon: Icon }) => {
  return (
    <IconButton
      size="small"
      sx={{
        margin: 1,
        alignContent: "center",
      }}
    >
      <Icon />
    </IconButton>
  );
};

export default Footer;
