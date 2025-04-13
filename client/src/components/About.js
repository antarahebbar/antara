import { Box, Typography, Grid, Divider, List, ListItem } from "@mui/material";
import { Spacer } from "./resuable";
import "@fontsource/poppins";
import "@fontsource/plus-jakarta-sans";
import "../assets/css/about.css";

const description1 = [
  "Developed full-stack feedback system using gRPC, GraphQL, and React.",
  "Integrated mobile battery info into product after technical planning and review.",
  "Voted Best Overall Project among 40+ interns by engineering directors.",
];


function AboutPage() {
  return (
    <Grid container spacing={2}>
      <Spacer space={1} />

      <Grid size={10}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "column", mb: "10vh" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 1000,
                mt: "1.5em",
                mb: 4,
              }}
            >
              About<span class="highlight"> Me</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Plus Jakarta Sans", fontSize: 18 }}
            >
              This is my intro text.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 1000,
                mt: "1.5em",
                mb: 4,
              }}
            >
              Experience
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5
            }}
          >
            <ExperienceCard
              company={"Samsara"}
              role={"SWE intern"}
              description={description1}
            />
            <ExperienceCard
              company={"Tavus"}
              role={"SWE + Product"}
              description={description1}
            />
            <ExperienceCard
              company={"EECS Department, UofM"}
              role={"Instructional Aide"}
              description={description1}
            />
          </Box>
        </Box>
      </Grid>
      <Spacer space={1} />
    </Grid>
  );
}

const ExperienceCard = ({ company, role, description }) => {
  return (
    <Box class="experience-box">
      <Box class="title-box">
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          {company}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          {role}
        </Typography>
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderColor: "#757575", filter: "blur(2px)" }}
      />
      <Box class="desc-box">
        <List sx={{ listStyleType: "circle", pl: 2 }}>
          {description.map((point, index) => (
            <ListItem key={index} sx={{ display: "list-item", py: 0.5 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                {point}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AboutPage;
