import { Box, Button, Card, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { BiLink } from "react-icons/bi";
import { BsMarkdown } from "react-icons/bs";
import { FaCheckSquare, FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PiFilePptDuotone } from "react-icons/pi";
import Carousel from "react-material-ui-carousel";

import pic1 from "../../img/project/mokkoji/pic1.png";
import pic2 from "../../img/project/mokkoji/pic2.png";
import pic3 from "../../img/project/mokkoji/pic3.png";
import pic4 from "../../img/project/mokkoji/pic4.png";
import pic5 from "../../img/project/mokkoji/pic5.png";
import pic6 from "../../img/project/mokkoji/pic6.png";
import pic7 from "../../img/project/mokkoji/pic7.png";
import pic8 from "../../img/project/mokkoji/pic8.png";
import pic9 from "../../img/project/mokkoji/pic9.png";
import pic10 from "../../img/project/mokkoji/pic10.png";

const items = {
  title: "MOKKOJI - 모꼬지",
  date: "2023.07 ~ 2023.08(5인 프로젝트)",
  content1:
    "나와 목적,목표가 일치하는 팀을 찾거나 만들 수 있는 웹 사이트 입니다./ 각종 아마추어, 지역 대회 참가를 목표로하는 " +
    "실력 위주의 팀을 만들 수 있는가 하면, 커뮤니티성이 더 강한 취미 용 팀을 만드는 것도 가능합니다. 각자의 목적이 뚜렷하게 반영 된 " +
    " 팀을 만들 수 있는 팀 매칭 커뮤니티 입니다.",
  content2:
    "React 와 SpringBoot 기반으로 만들어진 웹 사이트 입니다. 개발 기간의 많은 시간을 공부에 할애 하면서 진행한 프로젝트 이기도 합니다. " +
    " Redux 를 이용한 전역 상태관리와 Redux-persist 미들웨어와 Local Storage 를 이용한 로그인 상태 관리를 배우기도 했고, backend 에서는" +
    " Database 및 JPA Hibernate 의 효율, 효과적인 사용을 위해 QueryDSL 을 적용하거나 객체간 매핑을 위한 MapStruct 를 도입하기도 했습니다." +
    " 배포는 Linux 기반 Ubuntu 를 이용해 AWS EC2 를 이용했고, backend 는 SpringBoot 의 내장 Tomcat 으로, frontend 는 Nginx 를 통해 backend 와 연동하여 배포를 하였습니다.",
  function:
    "팀 개설 및 가입, 팀 뉴스피드, 댓글, 대댓글, 사진 업로드, 알림, 카테고리로 팀 분류, API 회원가입, " +
    " 회원관리, 팀 관리, 통계, 이벤트 관리, 쪽지",
  frontend: "React, Redux, Typescript, Material-UI",
  backend: "SpringBoot, Python, MyBatis, Hibernate, Querydsl, MapStruct ",
  database: "MariaDB",
  deployment: "Nginx, AWS EC2",
  githubUrl: "https://gist.github.com/Jee-on/6a676c8a59e20244258109ed247cb67f",
  liveDemoUrl: "http://ec2-3-35-190-8.ap-northeast-2.compute.amazonaws.com",
  siteUrl: "",
  readMeUrl: "",
  pptUrl: "https://docs.google.com/presentation/d/1ai0r7ioYaz7UW6B4SgRVZqHv5MA4NVXs6jQNEZFGslQ/edit?usp=sharing",
};

const crousel = [
  {
    url: pic1,
  },
  {
    url: pic2,
  },
  {
    url: pic3,
  },
  {
    url: pic4,
  },
  {
    url: pic5,
  },
  {
    url: pic6,
  },
  {
    url: pic7,
  },
  {
    url: pic8,
  },
  {
    url: pic9,
  },
  {
    url: pic10,
  },
];

export default function Mokkoji() {
  return (
    <Card
      sx={{
        pb: 5,
        maxWidth: 1100,
        boxShadow: 10,
        borderRadius: 4,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      align='center'
      elevation={24}>
      <Typography pt={7} fontSize={{ md: 35, xs: 25 }} fontWeight={800} fontFamily={"TheJamsil"}>
        {items.title}
      </Typography>
      <Typography pb={4} fontSize={{ md: 17, xs: 15 }} fontWeight={400} color={"grey"}>
        {items.date}
      </Typography>
      <Grid container p={{ lg: 4, md: 3, sm: 2, xs: 1 }} spacing={3}>
        <Grid container item lg={6} md={6} sm={12} xs={12}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {/* 캐러셀  */}
            <Carousel
              cycleNavigation={true}
              navButtonsAlwaysVisible={true}
              navButtonsProps={{
                style: {
                  backgroundColor: "transparent",
                  borderRadius: "16px",
                  margin: 0,
                },
              }}
              PrevIcon={<MdOutlineKeyboardDoubleArrowLeft class='carouselPrev fa-globe' />}
              NextIcon={<MdOutlineKeyboardDoubleArrowRight class='carouselNext fa-globe' />}>
              {crousel
                ? crousel.map((data) => (
                    <>
                      <Box component='img' src={data.url} maxWidth='100%' boxShadow={5} />
                    </>
                  ))
                : ""}
            </Carousel>
            <Grid
              container
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              pt={3}
              pl={{ lg: 7, md: 1, sm: 10, xs: 2 }}
              pr={{ lg: 7, md: 1, sm: 10, xs: 2 }}
              spacing={{ lg: 3, md: 3, sm: 2, xs: 2 }}>
              {/* liveDemo */}
              {items.liveDemoUrl ? (
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Button
                    href={items.liveDemoUrl}
                    target='_blank'
                    variant='contained'
                    sx={{
                      bgcolor: "primary",
                      height: 45,
                      minWidth: 170,
                      maxWidth: 240,
                      textTransform: "none",
                      ":hover": { color: "primary", bgcolor: "white", opacity: 0.8 },
                    }}
                    startIcon={<BiLink size={30} />}>
                    {"\u00A0"}
                    {"\u00A0"}
                    <Typography fontSize={18} fontWeight={500}>
                      Live Demo
                    </Typography>
                  </Button>
                </Grid>
              ) : null}
              {/* siteUrl */}
              {items.siteUrl ? (
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Button
                    href={items.siteUrl}
                    target='_blank'
                    variant='contained'
                    sx={{
                      bgcolor: "primary",
                      height: 45,
                      minWidth: 170,
                      maxWidth: 240,
                      textTransform: "none",
                      ":hover": { color: "primary", bgcolor: "white", opacity: 0.8 },
                    }}
                    startIcon={<BiLink size={30} />}>
                    {"\u00A0"}
                    {"\u00A0"}
                    <Typography fontSize={18} fontWeight={500}>
                      Live Web
                    </Typography>
                  </Button>
                </Grid>
              ) : null}
              {/* githubUrl */}
              {items.githubUrl ? (
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Button
                    href={items.githubUrl}
                    target='_blank'
                    variant='contained'
                    sx={{
                      bgcolor: "#24292e",
                      height: 45,
                      minWidth: 170,
                      maxWidth: 240,
                      textTransform: "none",
                      ":hover": { color: "black", bgcolor: "white", opacity: 0.8 },
                    }}
                    startIcon={<FaGithub size={30} />}>
                    {"\u00A0"}
                    {"\u00A0"}
                    <Typography fontSize={18} fontWeight={500}>
                      GitHub
                    </Typography>
                  </Button>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Grid>

        {/* 기능탭  */}
        <Grid item container lg={6} md={6} sm={12} xs={12} mt={{ lg: 0, md: 0, sm: 4, xs: 4 }}>
          <Grid item lg={12} md={12} sm={12} xs={12} mb={2} pl={2}>
            <Stack direction={"column"} spacing={3}>
              {/* 주요기능 */}
              {items.function ? (
                <Stack direction={{ sm: "row", xs: "column" }} spacing={0}>
                  <Stack direction={"row"} minWidth={150} spacing={1}>
                    <FaCheckSquare size={24} color='#1F4CA1' />
                    <Typography fontWeight={700} fontSize={18}>
                      주요기능
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500} fontSize={17} align='left' sx={{ wordBreak: "break-all" }}>
                    {items.function}
                  </Typography>
                </Stack>
              ) : null}

              {/* frontend */}
              {items.frontend ? (
                <Stack direction={{ sm: "row", xs: "column" }} spacing={0}>
                  <Stack direction={"row"} minWidth={150} spacing={1}>
                    <FaCheckSquare size={24} color='#1F4CA1' />
                    <Typography fontWeight={700} fontSize={18}>
                      Frontend
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500} fontSize={17} align='left' sx={{ wordBreak: "break-all" }}>
                    {items.frontend}
                  </Typography>
                </Stack>
              ) : null}

              {/* backend */}
              {items.backend ? (
                <Stack direction={{ sm: "row", xs: "column" }} spacing={0}>
                  <Stack direction={"row"} minWidth={150} spacing={1}>
                    <FaCheckSquare size={24} color='#1F4CA1' />
                    <Typography fontWeight={700} fontSize={18}>
                      Backend
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500} fontSize={17} align='left' sx={{ wordBreak: "break-all" }}>
                    {items.backend}
                  </Typography>
                </Stack>
              ) : null}

              {/* database */}
              {items.database ? (
                <Stack direction={{ sm: "row", xs: "column" }} spacing={0}>
                  <Stack direction={"row"} minWidth={150} spacing={1}>
                    <FaCheckSquare size={24} color='#1F4CA1' />
                    <Typography fontWeight={700} fontSize={18}>
                      Database
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500} fontSize={17} align='left' sx={{ wordBreak: "break-all" }}>
                    {items.database}
                  </Typography>
                </Stack>
              ) : null}

              {/* Deployment */}
              {items.deployment ? (
                <Stack direction={{ sm: "row", xs: "column" }} spacing={0}>
                  <Stack direction={"row"} minWidth={150} spacing={1}>
                    <FaCheckSquare size={24} color='#1F4CA1' />
                    <Typography fontWeight={700} fontSize={18}>
                      Deployment
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500} fontSize={17} align='left' sx={{ wordBreak: "break-all" }}>
                    {items.deployment}
                  </Typography>
                </Stack>
              ) : null}

              {/* Github */}
              {items.githubUrl ? (
                <Stack direction={{ sm: "row", xs: "column" }} spacing={0}>
                  <Stack direction={"row"} minWidth={150} spacing={1}>
                    <FaCheckSquare size={24} color='#1F4CA1' />
                    <Typography fontWeight={700} fontSize={18}>
                      Repository
                    </Typography>
                  </Stack>
                  <Link href={items.githubUrl} underline='nont' target='_blank'>
                    <Typography fontWeight={500} fontSize={17} align='left' sx={{ wordBreak: "break-all" }}>
                      <BiLink size={22} />
                      GitHub
                    </Typography>
                  </Link>
                </Stack>
              ) : null}

              <Stack direction={{ md: "row", sm: "column" }} spacing={{ md: 2, xs: 2 }}>
                {/* readMeUrl */}
                {items.readMeUrl ? (
                  <Button
                    href={items.readMeUrl}
                    target='_blank'
                    variant='contained'
                    sx={{
                      bgcolor: "grey",
                      height: 45,
                      minWidth: 130,
                      maxWidth: 160,
                      textTransform: "none",
                      ":hover": { color: "#24292e", bgcolor: "white", opacity: 0.8, transform: "scale(1.02)" },
                    }}
                    startIcon={<BsMarkdown size={22} />}>
                    {"\u00A0"}
                    {"\u00A0"}
                    <Typography fontSize={16} fontWeight={500}>
                      README.md
                    </Typography>
                  </Button>
                ) : null}
                {/* pptUrl */}
                {items.pptUrl ? (
                  <Button
                    href={items.pptUrl}
                    target='_blank'
                    variant='contained'
                    sx={{
                      bgcolor: "#F29900",
                      height: 45,
                      minWidth: 130,
                      maxWidth: 160,
                      textTransform: "none",
                      ":hover": { color: "#F29900", bgcolor: "white", opacity: 0.8, transform: "scale(1.02)" },
                    }}
                    startIcon={<PiFilePptDuotone size={22} />}>
                    {"\u00A0"}
                    {"\u00A0"}
                    <Typography fontSize={16} fontWeight={500}>
                      프로젝트 PPT
                    </Typography>
                  </Button>
                ) : null}
              </Stack>
            </Stack>
          </Grid>
          {/* 컨텐츠 탭 */}
          <Grid item lg={12} md={12} sm={12} xs={12} mt={2} pl={2} pr={2}>
            <Divider />
            <Typography mt={2} fontSize={17} fontWeight={500} align='left'>
              {items.content1
                ? items.content1.split("/").map((sentence, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: index === 0 ? 700 : "inherit", // 첫 번째 문장에 대해서만 fontWeight를 높임
                      }}>
                      {sentence.trim()}{" "}
                    </span>
                  ))
                : null}
            </Typography>
            <Typography mt={2} fontSize={17} fontWeight={500} align='left'>
              {items.content2
                ? items.content2.split(" ").map((word, index) => (
                    <span
                      key={index}
                      style={{
                        color: /[a-zA-Z]/.test(word) ? "#DB3D43" : "inherit", // 영어인 글자만 색상을 다르게 지정
                      }}>
                      {word}{" "}
                    </span>
                  ))
                : null}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
