import { Box, Link, Typography } from "@mui/material";

const InfoBox = ({
  jdLink,
  jobRole,
  location,
}: {
  jdLink: string;
  jobRole: string;
  location: string;
}) => {
  return (
    <Box sx = {{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
      <Link href={jdLink} sx={{ textDecoration: "none", color: "#8b8b8b" }}>
        <Typography sx = {{ margin: 0, fontSize: "12px", fontWeight: 600, letterSpacing: "1px", marginBottom: "3px"}}>
        Weekday
        </Typography>
      </Link>
      <Typography>{jobRole}</Typography>
      <Typography>{location}</Typography>
    </Box>
  );
};


export default InfoBox