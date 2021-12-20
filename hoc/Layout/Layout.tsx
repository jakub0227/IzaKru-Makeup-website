import React, { FC } from "react";
import { css } from "@emotion/react";
import { CssBaseline, Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import NextNprogress from "nextjs-progressbar";
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Navigation/Navigation";

export const Layout: FC = (props) => {
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
    `,
  };

  const theme = useTheme();

  return (
    <Paper square elevation={0} css={styles.root}>
      <NextNprogress
        color={theme.palette.primary.main}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <CssBaseline />

      <Navigation />

      {props.children}
      <Footer />
    </Paper>
  );
};
