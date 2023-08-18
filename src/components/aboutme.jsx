import { Grid, Typography } from "@mui/material";
import React from "react";
import { FaBirthdayCake, FaMapMarkerAlt, FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageHeader from "./custom/PageHeader";

import AboutCard from "./custom/AboutCard";

function Aboutme() {
  return (
    <section id='aboutme'>
      <Grid container alignItems='center' justifyContent='center' direction='column' sx={{ pb: 10, pt: 10 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <PageHeader title='ABOUT ME' tag='aboutme' />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          direction='row'
          sx={{ pt: 5, pb: 15 }}
          spacing={{ md: 0, xs: 5 }}>
          {/* Grid 1 */}
          <Grid container item xs={12} sm={12} md={6} lg={6} direction='column'>
            <Grid item align='center' justifyContent={"center"} justifyItems={"center"} alignItems={"center"} p={4}>
              <Typography fontWeight={600} fontSize={18} align='center'>
                안녕하세요. <br />
                끊임 없이 도전하는 풀 스택 웹 개발자 입니다. <br />
                새로운 트렌드의 기술, 언어를 습득하는 것을 즐기고 꼼꼼한 일 처리가 저의 장점 입니다.
                <br />
              </Typography>
            </Grid>
          </Grid>

          {/* Grid 2 */}
          <Grid container item xs={12} sm={12} md={6} lg={6} spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AboutCard icon={FaUserAstronaut} title='이름' content='전성호' />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AboutCard icon={FaBirthdayCake} title='생년월일' content='91.09.12' />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AboutCard icon={FaMapMarkerAlt} title='주소지' content='서울특별시 금천구' />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AboutCard icon={MdEmail} title='이메일' content='tjdgh3586@gmail.com' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Aboutme;
