import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "./custom/PageHeader";

/* projects */
import Portfolio from "./project/portfolio";
import Mokkoji from "./project/mokkoji";

function Projects() {
  return (
    <Box id='projects' sx={{ pt: 10, pb: 2, bgcolor: "#1F4CA1" }} component={"div"}>
      <Grid container direction='column' p={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} alignSelf={"center"} pb={4}>
          <PageHeader title='PROJECTS' tag='projects' color='white' />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pt: 3, pb: 3 }} align='center'>
          <Portfolio />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pt: 3, pb: 3 }} align='center'>
          <Mokkoji />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
