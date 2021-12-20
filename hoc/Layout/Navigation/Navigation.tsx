import { css } from "@emotion/react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Hidden,
  Tooltip,
} from "@material-ui/core";
import React, { FC } from "react";
import { NavigationItems } from "./NavigationItems/NavigationItems";
import NextLink from "next/link";
import { useTheme } from "@material-ui/core/styles";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Icon } from "@iconify/react";
import { HideOnScroll } from "../../../components/HideOnScroll";

export const Navigation: FC = () => {  
  const theme = useTheme();
  const styles = {
    toolbar: css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: 10px 0;
    `,
    title: css`
      color: #ffffff;
      font-family: Pacifico;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      cursor: pointer;
      :hover {
        color: #402249bf;
        transition: 0.7s;
      }
    `,
    link: css`
      margin-left: ${theme.spacing(0.5)}px;
      cursor: pointer;
      color: #444444;
    `,
    socialIcon: css`
      color: #fff;
      :hover {
        cursor: pointer;
        color: #402249bf;
        transition: 0.7s;
      }
    `,
  };

  return (
    <>
      <HideOnScroll>
        <AppBar color="transparent" elevation={0} square>
          <Toolbar css={styles.toolbar}>
            <Hidden mdUp>
              <MobileMenu />
            </Hidden>
            <Hidden smDown>
              <NextLink href="/">
                <MuiLink underline="none">
                  <Typography variant="h6" css={styles.title}>
                    IzaKru.
                  </Typography>
                </MuiLink>
              </NextLink>
              <NavigationItems />
              <NextLink
                href="https://www.instagram.com/izakru_makeup_lashes/"
                passHref
              >
                <Tooltip title="Mój Instagram">
                  <MuiLink target="_blank" rel="noopener">
                    <Icon
                      css={styles.socialIcon}
                      icon="cib:instagram"
                      style={{ fontSize: "24px" }}
                    />
                  </MuiLink>
                </Tooltip>
              </NextLink>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

// almost done, check alignment vertical for Toolbar nav elements
