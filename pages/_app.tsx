import React from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default MyApp;
