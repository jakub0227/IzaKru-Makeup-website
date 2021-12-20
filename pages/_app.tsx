import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { StylesProvider } from "@material-ui/styles";
import { Theme } from "../hoc/Theme/Theme";
import { PageTransition } from "../hoc/PageTransition/PageTransition";
import { Layout } from "../hoc/Layout/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Material UI SSR setup
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <Theme>
        <PageTransition>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageTransition>
      </Theme>
    </StylesProvider>
  );
};

export default MyApp;
