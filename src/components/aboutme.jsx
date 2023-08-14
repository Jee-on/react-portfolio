import React from "react";
import { Grid, Typography, Stack, Card, Paper, Divider } from "@mui/material";
import { PiLinkBold } from "react-icons/pi";
import { FaBirthdayCake, FaMapMarkerAlt, FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import AboutCard from "./custom/AboutCard";

function Aboutme() {
  return (
    <section id='aboutme' className='about-mf sect-pt4 route'>
      <div className='container'>
        <Grid container alignItems='center' justifyContent='center' direction='column' sx={{ pb: 10 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} data-aos='fade-right'>
            <Stack direction='row' alignItems={"center"}>
              <a href='#aboutme'>
                <PiLinkBold className='pagetitle' size={27} color='grey' />
              </a>
              <Typography variant='h3' class='pagetitle '>
                ABOUT ME
              </Typography>
            </Stack>
            <Divider orientation='horizontal' flexItem sx={{ borderWidth: "1.5px" }} />
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12} direction='row' sx={{ pt: 6 }}>
            <Grid container item xs={12} sm={12} md={6} lg={6} direction='column'>
              <Grid item align='center'>
                <Typography variant='h6'>
                  = 안녕하세요.
                  <br />
                  저는 abcdABCD ABOUT ME
                </Typography>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} md={6} lg={6}>
              <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <AboutCard icon={FaUserAstronaut} title='이름' content='전성호' />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <AboutCard icon={FaBirthdayCake} title='생년월일' content='91.09.12' />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <AboutCard icon={FaMapMarkerAlt} title='주소지' content='서울특별시 금천구' />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <AboutCard icon={MdEmail} title='이메일' content='tjdgh3586@gmail.com' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Aboutme;
