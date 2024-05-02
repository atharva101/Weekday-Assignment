import { Paper, Box, Button } from "@mui/material"
import AboutSection from "./AboutSection"
import InfoBox from "./InfoBox"
import { JdList } from "../../typings/types"


export const Card = ({item}:{item:JdList}) => {
    return(
        <div>
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
                    jdLink={item?.jdLink}
                    jobRole={item?.jobRole}
                    location={item?.location}
                  />
                </Box>

                <AboutSection about={item?.jobDetailsFromCompany} />

                <Button
                  variant="contained"
                  sx={{ width: "100%", marginTop: "20px", height: "50px" }}
                >
                  Easy Apply
                </Button>
              </Paper>
        </div>
    )
}