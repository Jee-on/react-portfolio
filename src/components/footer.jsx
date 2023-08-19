import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <Box id='footer' sx={{ pt: 6, pb: 2, bgcolor: "#282828" }} component={"div"}>
      <Stack direction='row' justifyContent={"center"} spacing={2}>
        <Link href='https://github.com/Jee-on' underline='none' target='_blank'>
          <VscGithub size={45} color='white' />
        </Link>

        <Link underline='none' target='_blank'>
          <FaBlog size={45} color='white' />
        </Link>
        <Link underline='none' target='_blank'>
          <BsInstagram size={45} color='white' />
        </Link>
        {/* 깃허브 */}
        {/* 블로그 */}
      </Stack>
      <Typography fontWeight={300} fontSize={16} color='white' align='center' mt={2} mb={2}>
        2023. Jeon Seong Ho. React Portfolio Project
      </Typography>
    </Box>
  );
}

export default Footer;
