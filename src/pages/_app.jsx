import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { SWRConfig } from "swr";
import fetcher from "lib/utils/axios";

import "styles/globals.scss";
import AppProvider from "lib/context/app";

import { Slide, ToastContainer } from "react-toastify";
import Footer from "components/layout/main-footer";
import Header from "components/layout/main-header";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <title>NG</title>
      </Head>

      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          fetcher,
        }}
      >
        <AppProvider>
          <Header />
          <Component {...pageProps} />
          <ToastContainer transition={Slide} newestOnTop={true} />
          <Footer />
        </AppProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
