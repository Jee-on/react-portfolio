import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa";
import PageHeader from "./custom/PageHeader";
import StorageCard from "./custom/StorageCard";

const cardData = [
  {
    icon: FaGithub,
    title: "GitHub",
    link: "https://github.com/Jee-on",
    content: "개인 코드 Repository 입니다.",
    list: [
      "개인 스터디, 연습 코드",
      "포트폴리오 코드, 각종 과제 코드",
      "지금은 부족하지만 앞으로 열심히 채워나갈 예정입니다",
    ],
  },
];

const Storage = () => {
  return (
    <Box
      id='storage'
      sx={{ pt: 8, pb: 2, bgcolor: "#E36A16" }}
      pl={{ lg: 20, md: 5, sm: 5, xs: 5 }}
      pr={{ lg: 20, md: 5, sm: 5, xs: 5 }}>
      <Grid container pt={2} direction={"column"}>
        <Grid item xs={12} sm={12} md={12} lg={12} pb={4} alignSelf={"center"}>
          <PageHeader title={"STORAGE"} tag='storage' color='white' />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} pb={4} mt={4}>
          <Stack direction={"row"} spacing={7} justifyContent={"center"}>
            {cardData.map((data) => (
              // <Grid item lg={6} md={6} sm={12} xs={12} align='center'>

              <StorageCard data={data ? data : null} />

              // </Grid>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Storage;
