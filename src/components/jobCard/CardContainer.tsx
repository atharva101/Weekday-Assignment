import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Idata } from "../../typings/types";
import { Card } from "./Card";

const CardContainer = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState<Idata>();
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
      requestOptions
    )
      .then((response) => response.text())
      .then((response: any) => {
        const result = JSON.parse(response);
        setOffSet((prev) => prev + 20);
        setisLoading(false);
        setData((prev) => ({
          ...result,
          jdList: prev?.jdList
            ? [...prev.jdList, ...result.jdList]
            : result.jdList,
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
              <Card item={item}></Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default CardContainer;
