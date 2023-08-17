import { Box, Grid } from "@mui/material";
import React from "react";
import PageHeader from "./custom/PageHeader";
import SkillCard from "./custom/SkillCard";

import skillData from "../datas/skillData";

function Skills() {
  return (
    <Box id='skills' sx={{ pt: 10, pb: 2, bgcolor: "#040A15" }}>
      <div id='stars' />
      <div id='stars2' />
      <div id='stars3' />
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent={"center"}>
          <PageHeader title='SKILLS' tag='skills' color='white' />
        </Grid>

        <Grid
          container
          item
          direction='column'
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ pt: 5, pb: 5 }}
          maxHeight={{ xs: 3500, sm: 1500, md: 1100, lg: 1100 }}>
          {skillData.map((data) => (
            <Grid item xs={3} sm={1} md={3} sx={{ pt: 3, pb: 1 }} align='center'>
              <SkillCard datas={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
