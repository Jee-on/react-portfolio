import { Card, Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";

export default function AboutCard({ icon, title, content }) {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12} justifyContent='left'>
      <Grid item xs={3} sm={3} md={3} lg={0}>
        <div></div>
      </Grid>
      <Grid item xs={9} sm={9} md={9} lg={12}>
        <Card
          sx={{
            boxShadow: 0,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Stack direction='row' spacing={{}} alignItems='center'>
            <Icon component={icon} className='aboutcard' sx={{ fontSize: 35, mr: 3.5 }} />
            <Stack dirction='column' spacing={1} justifyContent={"center"}>
              <Typography class='aboutcard aboutcard-title'>{title}</Typography>
              <Typography class='aboutcard aboutcard-content' variant='h6'>
                {content}
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
