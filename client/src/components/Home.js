import "../assets/css/home.css";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Spacer } from "./resuable";
import "@fontsource/poppins";
import "@fontsource/plus-jakarta-sans";

function HomePage() {
  return (
    <Grid container spacing={2}>
      <Spacer space={1} />

      <Grid size={10}>
        <Intro />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            minHeight: "50vh",
            marginBottom: "10vh",
            marginTop: "10vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: 400,
              flex: 1,
              textAlign: "end",
              pr: "8em",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h4">What I do</Typography>
            {/* <HighlightBox /> */}
            <Typography variant="h4">Where can you find me?</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              pl: "2em",
              justifyContent: "space-around",
            }}
          >
            <Typography sx={{ fontFamily: "Plus Jakarta Sans", fontSize: 20 }}>
              I’m a software developer who loves product, growth, and fast
              iteration. Scrapiness, problems without obvious solutions, and
              productive team environments call my name.
            </Typography>
            <Typography sx={{ fontFamily: "Plus Jakarta Sans", fontSize: 20 }}>
              If anything on this website resonated with you, don’t hesitate to
              set up a time to chat. Ping me at antara.hebbar@gmail.com.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Spacer space={1} />
    </Grid>
  );
}

const Intro = () => {
  return (
      <Box class="intro">
        <Box className="intro-box" sx={{ pl: "2em" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              mt: "2.5em",
              mb: 1,
            }}
          >
            Hi, I’m <span class="intro-highlight">Antara!</span>
          </Typography>
          <Typography sx={{ mb: 5, fontFamily: "Plus Jakarta Sans" }}>
            developer, risk-taker, & enthusiast of life
          </Typography>
          <Box display="flex" flexDirection="row" gap={4}>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "20px" }}
              >
                Reach Out
              </Button>
              <Button variant="text" color="primary">
                Resume
              </Button>
          </Box>
        </Box>
        <Box class="intro-box">
          <div>Insert cat pic here</div>
        </Box>
      </Box>
  );
};

export default HomePage;
