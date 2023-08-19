import { Card, Icon, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { BsCheck, BsDash } from "react-icons/bs";

export default function StorageCard({ data }) {
  return (
    <Card
      sx={{
        maxWidth: 450,

        boxShadow: 10,
        borderRadius: 4,
      }}
      elevation={24}>
      <Stack direction={"column"} spacing={1} sx={{ pt: 2, pb: 5, pl: 4, pr: 2 }}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Icon component={data.icon ? data.icon : ""} sx={{ fontSize: 50 }} />
          <Typography fontSize={45} fontWeight={800}>
            {data.title ? data.title : ""}
          </Typography>
        </Stack>
        <Link fontSize={22} fontWeight={500} href={data.link} underline='nont' target='_blank' align='left'>
          {data.link ? data.link.replace(/^[^/]*\/\//, "") : ""}
        </Link>
        <Typography fontSize={20} fontWeight={600} align='left'>
          {data.content ? data.content : ""}
        </Typography>
        {data.list
          ? data.list.map((item) => (
              <Stack direction={"row"} alignItems={"center"}>
                <BsDash style={{ fontSize: 18, minWidth: "6%" }} align='left' />
                <Typography fontSize={18} fontWeight={500} align='left'>
                  {item}
                </Typography>
              </Stack>
            ))
          : ""}
      </Stack>
    </Card>
  );
}
