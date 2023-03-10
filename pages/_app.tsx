import React from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image src="/logo.jpg" alt="Logo" width={44} height={44} />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box mr="1rem">
              <Typography variant="body2" color="#c4c4c4">
                Handicrafted by
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                textAlign="right"
                color="#5b5b5b"
                fontSize="12px"
              >
                Jim HLS
              </Typography>
            </Box>
            <Image src="/avatar.jpg" alt="avatar" width={44} height={44} />
          </Box>
        </Box>
      </Container>
      <Component {...pageProps} />
      <Box>
        <Divider sx={{ borderColor: "rgba(0,0,0,0.5)" }} />
        <Container maxWidth="md" sx={{ mt: "40px" }}>
          <Typography
            textAlign="center"
            fontSize="13px"
            color="#aaaaaa"
            fontWeight={500}
          >
            This website is created as part of Hlsolutions program. The
            materials contained on this website are provided for general
          </Typography>
          <Typography
            fontSize="13px"
            textAlign="center"
            color="#aaaaaa"
            fontWeight={500}
          >
            information only and do not constitute any form of advice. HLS
            assumes no responsibility for the accuracy of any particular
            statement and
          </Typography>
          <Typography
            fontSize="13px"
            textAlign="center"
            color="#aaaaaa"
            fontWeight={500}
          >
            accept no liability for any loss or damage which may arise from
            reliance on the information contained on this site.
          </Typography>
          <Typography
            textAlign="center"
            mt="1rem"
            fontSize="14px"
            fontWeight={500}
            color="#959595"
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
