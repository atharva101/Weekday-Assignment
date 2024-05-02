import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../../store/dataSlice";
import { RootState } from "../../store/store";
import { Grid, Paper, Box, Button } from "@mui/material";
import AboutSection from "./AboutSection";
import InfoBox from "./InfoBox";
import { JdList } from "../../typings/types";

const CardContainer = () => {
  const dispatch = useDispatch();
  const [offSet, setOffset] = useState(0);
  const { jdList, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = () => {
    dispatch(fetchDataStart());
    fetchJobs(offSet)
      .then((data) => {
        setOffset((prevOffset) => prevOffset + 10);
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => dispatch(fetchDataFailure(error.message)));
  };

  const fetchJobs = async (offset: number) => {
    const body = JSON.stringify({
      limit: 10,
      offset: offset,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

  console.log(jdList, "hehe");
  
  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1, margin: "1rem" }}>
        {!!jdList?.length &&
          jdList?.map((item: JdList) => (
            <Grid item xs={12} sm={8} md={6} lg={4} key={item.jdUid}>
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
                  />
                  <InfoBox
                    jdLink={item.jdLink}
                    jobRole={item.jobRole}
                    location={item.location}
                  />
                </Box>

                <AboutSection about={item.jobDetailsFromCompany} />

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default CardContainer;
