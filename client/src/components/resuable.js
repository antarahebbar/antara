import { Grid, Box } from "@mui/material";

const Spacer = ({space}) => {
  return (
    <Grid item size={space}></Grid>
  );
};

const HighlightBox = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "40px",
        height: "20px",
        backgroundColor: "rgba(255, 40, 228, 0.25)",
        borderRadius: "20px",
        zIndex: 0,
      }}
    />
  );
};

export {Spacer, HighlightBox};