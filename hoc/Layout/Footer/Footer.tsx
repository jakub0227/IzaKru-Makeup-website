import React, { FC } from "react";
import { css } from "@emotion/react";
import NextLink from "next/link";
import { useTheme } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Icon as MUICON,
  Fab,
  Tooltip,
  Link,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import { ScrollTop } from "../../../components/ScrollTop";

export const Footer: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      height: 380px;
      width: 100%;
      position: relative;
      ${theme.breakpoints.up("md")} {
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
      }
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }
    `,
    logoTitle: css`
      color: #402249bf;
      font-family: Pacifico;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
    `,
    socialLinks: css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    `,
    copyrights: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
    `,
    fab: css`
      color: #fff;
    `,
    socialIcon: css`
      margin: 0 15px;
      color: #9f9dae;
      :hover {
        cursor: pointer;
        color: #402249bf;
      }
    `,
    scrollTopBtn: css`
      position: absolute;
      top: 10px;
      right: 15px;
    `,
  };
  return (
    <>
      <Paper square elevation={0} css={styles.root}>
        <div>
          <Typography variant="h6" css={styles.logoTitle}>
            IzaKru.
          </Typography>
          <Typography variant="button" color="textSecondary">
            Kontakt:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            izakru.makeup@gmail.com
          </Typography>
          <Typography variant="body1" color="textSecondary">
            +48 600 264 624
          </Typography>
        </div>
        <div>
          <Typography variant="button" color="textSecondary" align="center">
            Znajdź mnie na:
          </Typography>
          <div>
            <NextLink
              href="https://www.facebook.com/IzabelaKrukowskaMakeUpArtist"
              passHref
            >
              <Tooltip title="Zajrzyj na mój profil">
                <Link target="_blank" rel="noopener">
                  <Icon
                    css={styles.socialIcon}
                    icon="cib:facebook"
                    style={{ fontSize: "24px" }}
                  />
                </Link>
              </Tooltip>
            </NextLink>
            <NextLink
              href="https://www.instagram.com/izakru_makeup_lashes/"
              passHref
            >
              <Tooltip title="Obserwuj na Instagram">
                <Link target="_blank" rel="noopener">
                  <Icon
                    css={styles.socialIcon}
                    icon="cib:instagram"
                    style={{ fontSize: "24px" }}
                  />
                </Link>
              </Tooltip>
            </NextLink>
          </div>
        </div>
        <div css={styles.scrollTopBtn}>
          <ScrollTop>
            <Tooltip title="Do góry">
              <Fab css={styles.fab} color="secondary" size="small">
                <MUICON>arrow_drop_up</MUICON>
              </Fab>
            </Tooltip>
          </ScrollTop>
        </div>
        <div css={styles.copyrights}>
          <Typography variant="body2" color="textSecondary" align="left">
            {}© {new Date().getFullYear()} Izabela Krukowska
          </Typography>
        </div>
      </Paper>
    </>
  );
};

// fix layout mobile responsiveness
