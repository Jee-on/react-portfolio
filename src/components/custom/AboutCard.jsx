import { Card, Typography, Icon, Stack, Box } from "@mui/material";

import React from "react";

export default function AboutCard({ icon, title, content }) {
  return (
    <Card
      sx={{
        p: 2,

        boxShadow: 0,
      }}>
      <Stack
        direction='row'
        spacing={{
          xs: 3,
          sm: 3,
          md: 3,
          lg: 2,
        }}
        alignContent={"left"}
        alignItems='center'
        align='left'>
        <Box minWidth={140} display={{ lg: "none", md: "none" }}></Box>
        <Icon component={icon} className='aboutcard' sx={{ fontSize: 35 }} />
        <Stack dirction='column' spacing={2}>
          <Typography class='aboutcard aboutcard-title' variant='h5'>
            {title}
          </Typography>
          <Typography class='aboutcard aboutcard-content' variant='h5'>
            {content}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
