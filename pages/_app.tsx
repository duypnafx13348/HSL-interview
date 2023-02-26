import React from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const theme = createTheme();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Shoes Shop</title>
        <meta name="description" content="Shoes Shop" />
        <meta property="og:title" content="Shoes Shop" />
        <meta property="og:description" content="Shoes Shop" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      {/* <NavBar /> */}
      <Container maxWidth="md" sx={{ height: "56px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="inherit"
        >
          <Box>
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          </Box>
          <Box display="flex">
            <Box mr="1rem">
              <Typography variant="body2" color="grey">
                Handicrafted by
              </Typography>
              <Typography variant="body2" fontWeight={600} textAlign="right">
                Jim HLS
              </Typography>
            </Box>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsA4Tr66-qSq2om-Y2-TVZTn484DzYS20eDwfiCUzR&s"
              />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <Component {...pageProps} />
      <Box mt="60px">
        <Divider />
        <Container maxWidth="md" sx={{ mt: "40px" }}>
          <Typography textAlign="center" fontSize="14px">
            This website is created as part of Hlsolutions program. The
            materials contained on this website are provided for general
            information only and do not constitute any form of advice. HLS
            assumes no responsibility for the accuracy of any particular
            statement and accept no liability for any loss or damage which may
            arise from reliance on the information contained on this site.
          </Typography>
          <Typography
            textAlign="center"
            mt="1rem"
            fontSize="14px"
            fontWeight={600}
          >
            Copyright 2021 HLS
          </Typography>
        </Container>
      </Box>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default MyApp;
