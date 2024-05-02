import { Typography, Box } from "@mui/material";

const AboutSection = ({ about }: { about: string }) => {
  return (
    <Box sx={{ textAlign: "initial" }}>
      <Typography
        style={{
          fontWeight: "800",
          fontSize: "1rem",
          lineHeight: 1.5,
          marginTop: "20px",
        }}
      >
        About Company:
      </Typography>
      <div
        style={{
          maxHeight: "20.8em" /* Set a maximum height */,
          overflow: "hidden",
        }}
      >
        <Typography sx={{}}>{about}</Typography>
      </div>
    </Box>
  );
};
export default AboutSection;
