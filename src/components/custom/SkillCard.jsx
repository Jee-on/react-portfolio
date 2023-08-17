import React from "react";
import { Card, Typography, Icon, Stack, Grid, Box, Divider } from "@mui/material";

export default function SkillCard({ datas }) {
  return (
    <Card
      sx={{
        maxWidth: 320,
        width: 280,
        minWidth: 230,
        boxShadow: 10,
        borderRadius: 4,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      align='center'
      elevation={24}>
      <Typography variant='h5' fontWeight={700} sx={{ pl: 2, pt: 2, pb: 0.5 }} align='left'>
        {datas.title}
      </Typography>
      <Divider variant='middle' flexItem sx={{ borderWidth: "1.5px" }} />
      <Stack sx={{ pt: 4, pb: 3, pl: 4, pr: 4 }} direction={"column"} spacing={2}>
        {datas.images
          ? datas.images.map((img) => (
              <Box component='img' sx={{ maxHeight: 100 }} alt='img' src={img} align='center'></Box>
            ))
          : ""}
      </Stack>
    </Card>
  );
}
