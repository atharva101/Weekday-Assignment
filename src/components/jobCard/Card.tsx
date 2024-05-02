import Paper from "@mui/material/Paper";
import { data } from "./dummyData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AboutSection from "./AboutSection";
import InfoBox from "./InfoBox";
import { Typography } from "@mui/material";

const Card = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1, margin: "1rem" }}>
        {data?.jdList.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper
              elevation={2}
              sx={{
                height: "35rem",
                maxWidth: "22rem",
                padding: "30px",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Box sx={{ display: "flex", gap: "15px" }}>
                <img
                  src="./weekday.png"
                  height={30}
                  width={40}
                  alt="logo"
                ></img>
                <InfoBox
                  jdLink={item.jdLink}
                  jobRole={item.jobRole}
                  location={item.location}
                />
              </Box>
             
              <AboutSection about= {item.jobDetailsFromCompany}/>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Card;
