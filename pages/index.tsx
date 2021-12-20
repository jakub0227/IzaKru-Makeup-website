import { css } from "@emotion/react";
import { Button, Tooltip, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import { AnimatedHeading } from "../components/AnimatedHeading/AnimatedHeading";

const IndexPage: FC = () => {
  const router = useRouter();
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
        background-position: center;
      }
    `,
    hero: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    heroTitle: css`
      color: #ffffff;
      font-family: Lato, sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 auto;
      ${theme.breakpoints.up("md")} {
        letter-spacing: 0.09em;
        max-width: 95%;
        text-align: center;
      }
      ${theme.breakpoints.down("sm")} {
        text-align: center;
        letter-spacing: 0.07em;
        font-size: 3.5em;
      }
    `,
    heroText: css`
      margin-top: 80px;
      line-height: 45px;
      width: 100%;
      margin-left: 385px;
      margin-right: 385px;
      font-style: normal;
      font-weight: normal;
      ${theme.breakpoints.up("md")} {
        width: 66ch;
        line-height: 36px;
        text-align: center;
        justify-self: center;
        letter-spacing: 0.02em;
      }
      ${theme.breakpoints.down("sm")} {
        text-align: center;
        padding: 0 15px;
        line-height: 28px;
        width: 100%;
        letter-spacing: 0.03em;
        font-size: 1rem;
      }
    `,
    btnLinks: css`
      margin-top: 80px;
      width: 50vh;
      display: flex;
      justify-content: center;
    `,
    btnAbout: css`
      border-radius: 25px;
      margin: 10px;
      height: 48px;
      background: rgba(64, 34, 73, 0.75);
      color: #ffff;
      border: 0.1px solid rgba(255, 255, 255, 0.35);
      :hover {
        box-shadow: 20px 5px 40px #5d3d66, 0px 5px 40px #a37fac,
          -20px 5px 40px #402249;
        background-color: transparent;
        transition: 0.7s;
        color: rgba(64, 34, 73, 1);
        border: 0.1px solid rgba(64, 34, 73, 0.6);
      }
      ${theme.breakpoints.up("md")} {
        width: 180px;
      }
      ${theme.breakpoints.down("sm")} {
        width: 120px;
      }
    `,
    btnMyWorks: css`
      border-radius: 25px;
      margin: 10px;
      height: 48px;
      color: #fff;
      background: rgb(159, 157, 174, 0.75);
      :hover {
        box-shadow: 20px 5px 40px #565463, 0px 5px 40px #8d8b9b,
          -20px 5px 40px #9f9dae;
        transition: 0.7s;
        color: rgba(64, 34, 73, 0.8);
        border: 0.1px solid rgba(64, 34, 73, 0.6);
      }
      ${theme.breakpoints.up("md")} {
        width: 180px;
      }

      ${theme.breakpoints.down("sm")} {
        width: 120px;
      }
    `,
  };
  return (
    <>
      <div css={styles.root}>
        <div css={styles.hero}>
          <AnimatedHeading>
            <Typography
              variant="h1"
              css={styles.heroTitle}
              align="center"
              id="back-to-top-anchor"
            >
              Izabela Krukowska
            </Typography>
          </AnimatedHeading>
          <Typography variant="h5" css={styles.heroText} color="textSecondary">
            “ Zadowolenie klientki jest dla mnie najważniejsze, dlatego do
            każdej podchodzę indywidualnie. W przemyślany sposób dobieram
            kosmetyki oraz makijaż, tak aby każda z moich klientek czuła się
            wyjątkowo. ”
          </Typography>
          <div css={styles.btnLinks}>
            <Tooltip title="Poznaj mnie lepiej">
              <Button
                css={styles.btnAbout}
                variant="contained"
                onClick={() => router.push("/info")}
              >
                O mnie
              </Button>
            </Tooltip>
            <Tooltip title="Galeria zdjęć">
              <Button
                css={styles.btnMyWorks}
                variant="outlined"
                onClick={() => router.push("/galeria")}
              >
                Moje prace
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
