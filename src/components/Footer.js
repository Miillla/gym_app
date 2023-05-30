import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="fff3f4">
      <Stack gap="40px" alightItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography varian="h5" pb="40px" mt="20px">
          App-gym is a fitness app that helps you to find the best exercises for
          your body.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
