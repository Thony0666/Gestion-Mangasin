import { Box, Grid, Hidden } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderBack from "./HeaderBack";
import HeaderBackXS from "./HeaderBackXS";
import axios from "axios";
import ContentCardFront from "../ContentCards";

function GestionPub() {
  const [datas, setMyDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/article/all")
      .then((response) => {
        setMyDatas(response.data.articles  );
        console.log("okey azo articles be");
        console.log(response);
      })
      .catch((error) => {
        console.error("tsy mandeha url articles");
        console.error(error);
      });
  }, []);
  return (
    <>
      <Box>
        <Hidden mdDown>
          <HeaderBack />
        </Hidden>
        <Hidden mdUp>
          <HeaderBackXS />
        </Hidden>
        <Hidden xsUp>
          <HeaderBackXS />
        </Hidden>
      </Box>

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        border={"red solid 2px"}
      >
        {datas &&
          datas.map((e) => (
            <Box key={e.id}>
              <Box
                sx={{
                  minWidth: { xs: 300, sm: 350 },
                  p: { xs: 1, sm: 2 },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <ContentCardFront datas={e} />
              </Box>
            </Box>
          ))}
      </Grid>
    </>
  );
}

export default GestionPub;
