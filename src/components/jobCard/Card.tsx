import { Paper, Box, Button } from "@mui/material";
import AboutSection from "./AboutSection";
import InfoBox from "./InfoBox";
import { JdList } from "../../typings/types";
import { useState } from "react";
import AboutUsModal from "./Modal";

export const Card = ({ item }: { item: JdList }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          height: "35rem",
          maxWidth: "22rem",
          padding: "30px",
        }}
      >
        <Box sx={{ display: "flex", gap: "15px" }}>
          <img src="./weekday.png" height={30} width={40} alt="logo"></img>
          <InfoBox
            jdLink={item?.jdLink}
            jobRole={item?.jobRole}
            location={item?.location}
          />
        </Box>

        <AboutSection
          about={item?.jobDetailsFromCompany}
          setOpenModal={setOpenModal}
        />

        {openModal && <AboutUsModal open={openModal} setOpen={setOpenModal} aboutUs={item.jobDetailsFromCompany}/>}

        <Button
          variant="contained"
          sx={{ width: "100%", marginTop: "20px", height: "50px" }}
        >
          Easy Apply
        </Button>
      </Paper>
    </div>
  );
};
