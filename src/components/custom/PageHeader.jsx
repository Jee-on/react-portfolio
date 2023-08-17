import { Grid, Typography, Stack, Card, Paper, Divider, Box } from "@mui/material";
import { PiLinkBold } from "react-icons/pi";
import React from "react";

export default function PageHeader({ title, tag, color }) {
  return (
    <>
      <Stack direction='row' alignItems={"center"} justifyContent={"center"}>
        <a href={`#${tag}`}>
          <PiLinkBold className='pagetitle' size={32} color='grey' />
        </a>
        <Typography variant='h3' fontWeight={700} color={color ? color : "black"}>
          {title}
        </Typography>
      </Stack>
      <Divider orientation='horizontal' flexItem sx={{ borderWidth: "1.5px" }} color={color ? color : "lightgrey"} />
    </>
  );
}
