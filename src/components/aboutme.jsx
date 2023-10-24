import { Grid, Typography, Box, Stack } from "@mui/material";
import React from "react";
import { FaBirthdayCake, FaMapMarkerAlt, FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageHeader from "./custom/PageHeader";

import AboutCard from "./custom/AboutCard";

function Aboutme() {
  return (
    <Box id='aboutme' sx={{ pt: 1, pb: 15 }} align='center'>
      <Grid container direction='column' sx={{ pt: 10 }} maxWidth={1200} alignItems='center' justifyContent='center'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <PageHeader title='ABOUT ME' tag='aboutme' />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={{ pt: 5 }} alignItems={"center"}>
          {/* Grid 1 */}
          <Grid item xs={12} sm={12} md={6} lg={6} p={5}>
            <Typography fontWeight={600} fontSize={20} maxWidth={490} sx={{ opacity: 0.9 }}>
              안녕하세요. <br />
              끊임 없이 도전하는 웹 개발자 입니다. <br />
              새로운 트렌드의 기술, 언어를 습득하는 것을 즐기고 <br />
              꼼꼼한 일 처리가 저의 장점 입니다. <br />
              <br />
            </Typography>
          </Grid>

          {/* Grid 2 */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack
              direction={"row"}
              justifyContent={{ md: "left", sm: "center", xs: "center" }}
              alignItems='baseline'
              flexWrap='wrap'
              pl={{ md: 0, sm: 6, xs: 2 }}
              sx={{ maxWidth: 570, minWidth: 300 }}>
              <AboutCard icon={FaUserAstronaut} title='이름' content='전성호' />
              <AboutCard icon={FaMapMarkerAlt} title='주소지' content='서울특별시 금천구' />
              <AboutCard icon={FaBirthdayCake} title='생년월일' content='91.09.12' />
              <AboutCard icon={MdEmail} title='이메일' content='tjdgh3586@gmail.com' link='tjdgh3586@gmail.com' />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Aboutme;
