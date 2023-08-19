import { Card, Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";

export default function AboutCard({ icon, title, content }) {
  return (
    <Card
      sx={{
        boxShadow: 0,
        maxWidth: 260,
        minWidth: 260,
        pb: 2,
        position: "relative",
        overflow: "visible",
      }}
      flexWrap='wrap'>
      <Icon
        component={icon}
        className='aboutcard'
        sx={{ fontSize: 35, mr: 2, position: "absolute", left: -10, top: "25%" }}
      />

      <Stack direction='column' pl={6} alignItems={{ md: "flex-start", sm: "center" }}>
        <Typography fontSize={24} fontWeight={600}>
          {title}
        </Typography>
        <Typography fontSize={20} fontWeight={600} sx={{ opacity: 0.8 }}>
          {content}
        </Typography>
      </Stack>
    </Card>
  );
}
