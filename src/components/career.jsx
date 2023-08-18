import React from "react";
import { Box, Grid, Stack, Typography, Link } from "@mui/material";
import PageHeader from "./custom/PageHeader";
import wig from "../img/wig.png";

const Career = () => {
  return (
    <Box
      id='career'
      sx={{ pt: 8, pb: 2, bgcolor: "#A6A4A4" }}
      pl={{ lg: 20, md: 5, sm: 5, xs: 5 }}
      pr={{ lg: 20, md: 5, sm: 5, xs: 5 }}>
      <Grid container pt={2} direction={"column"}>
        <Grid item xs={12} sm={12} md={12} lg={12} pb={4} alignSelf={"center"}>
          <PageHeader title={"CAREER"} tag='career' color='white' />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} pb={4} mt={4} align='center'>
          <Box component={"img"} src={wig} sx={{ opacity: 0.8, width: "100%", maxWidth: 250 }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Career;
