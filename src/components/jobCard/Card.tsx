import Paper from "@mui/material/Paper";
import { data } from "./dummyData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AboutSection from "./AboutSection";
import { Button, Typography } from "@mui/material";
import InfoBox from "./InfoBox";
import { useEffect, useState } from "react";
const Card = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState({ jdList: [] });
  const [offSet, setOffSet] = useState(0);

  function fetchData() {
    setisLoading(true);
    const body = JSON.stringify({
      limit: 20,
      offset: offSet,
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };

    return fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions,
    )
      .then((response) => response.text())
      .then((response: any) => {
        const result = JSON.parse(response);
        setOffSet((prev) => prev + 20);
        setisLoading(false);
        setData((prev) => ({
          ...result,
          jdList: [...prev.jdList, ...result.jdList],
        }));
      })
      .catch((error) => console.error(error));
  }
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1, margin: "1rem" }}>
        {!!data?.jdList?.length &&
          data?.jdList?.map((item) => (
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
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Card;
