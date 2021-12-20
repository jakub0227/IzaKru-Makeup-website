import { css } from "@emotion/react";
import { Button, Icon, Tooltip, Typography } from "@material-ui/core";
import React, { FC } from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";

const Error404Page: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      background-image: url("https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
      background-size: cover;
      justify-content: center;
      ${theme.breakpoints.up("md")} {
        align-items: center;
      }
      ${theme.breakpoints.down("sm")} {
        text-align: center;
        align-items: center;
      }
    `,
    errorTxt: css`
      color: #ffffff;
      font-family: Lato, sans-serif;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
      margin-bottom: 45px;
    `,
    redirectBtn: css`
      margin-top: 45px;
      border-radius: 5px;
      max-width: 250px;
      color: #ffffff;
      text-decoration: none;
      text-align: center;
      :hover {
        color: #402249bf;
        transition: 0.7s;
      }
    `,
  };
  return (
    <div css={styles.root}>
      <Typography variant="h2" css={styles.errorTxt}>
        Oops! <br />
        Błąd: Error 404
      </Typography>
      <Typography variant="h4" color="textSecondary">
        Żądana strona nie istnieje!
      </Typography>
      <Link href="/">
        <Tooltip title="Strona Główna">
          <Button
            color="inherit"
            variant="outlined"
            css={styles.redirectBtn}
            startIcon={<Icon color="inherit">home</Icon>}
          >
            Powrót
          </Button>
        </Tooltip>
      </Link>
    </div>
  );
};

export default Error404Page;

// fix whitespace, margins, padding in responsive layout for mobile Iphone 6, X
