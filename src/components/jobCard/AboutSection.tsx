import { Typography, Box, Button } from "@mui/material";

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
          maxHeight: "20em" ,
          overflow: "hidden",
        }}
      >
        <Typography>{about}</Typography>
      </div>

      <Button sx = {{margin: "auto", width: "100%"}}>Show More</Button>
    </Box>
  );
};
export default AboutSection;
