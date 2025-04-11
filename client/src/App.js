import "./assets/css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";

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
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="lg" class="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
