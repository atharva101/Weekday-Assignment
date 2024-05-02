import { Typography, Box, Button } from "@mui/material";
import AboutUsModal from "./Modal";

const AboutSection = ({ about, setOpenModal }: { about: string , setOpenModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
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

      <Button sx = {{margin: "auto", width: "100%"}} onClick = {()=> setOpenModal(true)}>Show More</Button>
    </Box>
  );
};
export default AboutSection;
