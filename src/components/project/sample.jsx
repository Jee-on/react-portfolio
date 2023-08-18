import { Box, Button, Card, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { BiLink } from "react-icons/bi";
import { BsMarkdown } from "react-icons/bs";
import { FaCheckSquare, FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PiFilePptDuotone } from "react-icons/pi";
import Carousel from "react-material-ui-carousel";

const items = {
  title: "",
  date: "",
  content1: "",
  content2: "",
  function: "",
  frontend: "",
  backend: "",
  database: "",
  deployment: "",
  githubUrl: "",
  liveDemoUrl: "",
  siteUrl: "",
  readMeUrl: "",
  pptUrl: "",
};

const crousel = [
  {
    url: "",
  },
  {
    url: "",
  },
];

export default function Portfolio() {
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
              PrevIcon={<MdOutlineKeyboardDoubleArrowLeft class='carouselPrev' fa-globe />}
              NextIcon={<MdOutlineKeyboardDoubleArrowRight class='carouselNext' fa-globe />}>
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
                      Github
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
