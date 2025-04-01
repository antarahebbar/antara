import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import {Spacer, HighlightBox} from "./components/resuable";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom theme: Light orange and plum
const theme = createTheme({
  palette: {
    primary: {
      main: "#8E4585",
      secondary: "#FFA024",
    },
  },
});

function App() {
  return (
    <Container maxWidth="lg" class="app">
      <Header />
      <Grid container spacing={2}>
        <Spacer space={1} />

        <Grid size={10}>
          <Intro />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "50vh",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                What I
                <span style={{ position: "relative", display: "inline-block" }}>
                  do
                </span>
                <HighlightBox/>
              </Typography>
              <Typography sx={{ flex: 1 }}>Where can you find me?</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                Where can you find me?
              </Typography>
              <Typography sx={{ flex: 1 }}>Where can you find me?</Typography>
            </Box>
          </Box>
        </Grid>
        <Spacer space={1} />
      </Grid>
      <Footer />
    </Container>
  );
}

const Intro = () => {
  return (
    <Box class="intro">
      <Box className="intro-box" sx={{ ml: 6 }}>
        <Typography class="intro-text">
          Hi, I’m <span class="intro-highlight">Antara!</span>
        </Typography>
        <Typography sx={{ mb: 4 }}>
          developer, risk-taker, & enthusiast of life
        </Typography>
        <Box display="flex" flexDirection="row" gap={4}>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </Box>
      </Box>
      <Box class="intro-box">
        <div>Insert cat pic here</div>
      </Box>
    </Box>
  );
};


export default App;
