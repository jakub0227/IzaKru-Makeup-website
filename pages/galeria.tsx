import { css } from "@emotion/react";
import { Typography, Tabs, Tab, Grid, Paper } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import React, { FC, useState } from "react";
import { AnimatedHeading } from "../components/AnimatedHeading/AnimatedHeading";
import { TabGalleryCategory } from "../components/TabGalleryCategory/TabGalleryCategory";
import { galleryImagesData } from "../galleryData";

const GalleryPage: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (e: React.ChangeEvent<{}>, newTabIndex: number) => {
    e.preventDefault();
    setTabIndex(newTabIndex);
  };
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      background-color: #b9a0a7;
      justify-content: flex-start;
      align-items: center;
      ${theme.breakpoints.up("md")} {
        align-items: center;
      }
      ${theme.breakpoints.down("sm")} {
        justify-content: flex-start;
        align-items: center;
      }
    `,
    title: css`
      color: #ffff;
      text-transform: uppercase;
      font-size: 48px;
      line-height: 58px;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 25px;
      ${theme.breakpoints.up("md")} {
        margin-top: 170px;
      }
      ${theme.breakpoints.down("sm")} {
        margin-top: 100px;
      }
    `,
    line: css`
      width: 320px;
      height: 0px;
      border: 3px solid #ffffff;
      background-color: #fff;
    `,
    galleryTabs: css`
      margin-top: 55px;
      margin-bottom: 25px;
      max-width: 90%;
      margin-left: 45px;
      margin-right: 45px;
      background: rgba(64, 34, 73, 0.75);
      border-radius: 15px;
      justify-content: space-between;
      padding: 10px;
      color: #fff;
    `,
    tabs: css`
      .MuiTabs-indicator {
        background-color: #fff;
        border-radius: 15px;
      }
      .MuiTabs-root {
        border-radius: 15px;
      }
    `,
    tabLabel: css`
      text-transform: initial;
      font-size: normal;
    `,
    gallery: css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      width: 100%;
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
    paper: css`
      margin: 10px;
      width: 500px;
      height: 450px;
      border: 3px solid #ffffff;
      ${theme.breakpoints.down("sm")} {
        width: 320px;
        height: 280px;
      }
    `,
    image: css`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `,
  };
  return (
    <>
      <div css={styles.root}>
        <AnimatedHeading>
          <Typography
            css={styles.title}
            align="center"
            variant="h1"
            id="back-to-top-anchor"
          >
            Galeria
          </Typography>
          <div css={styles.line} />
        </AnimatedHeading>
        <div css={styles.galleryTabs}>
          <Tabs
            css={styles.tabs}
            textColor="inherit"
            value={tabIndex}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
          >
            <Tab css={styles.tabLabel} label="Makijaż fashion i sesje" />
            <Tab css={styles.tabLabel} label="Makijaż ślubny" />
            <Tab css={styles.tabLabel} label="Upięcia i stylizacje" />
            <Tab css={styles.tabLabel} label="Stylizacje rzęs i brwi" />
          </Tabs>
        </div>
        <div css={styles.gallery}>
          <TabGalleryCategory value={tabIndex} index={0}>
            <Typography variant="h5" align="center" color="textSecondary">
              Moje prace i publikacje
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              css={styles.gallery}
            >
              {galleryImagesData
                .filter((picture) => picture.category === "makeup")
                .map((el) => (
                  <Grid item key={el.img}>
                    <Paper css={styles.paper} elevation={6}>
                      <img css={styles.image} src={el.img} alt={el.title} />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </TabGalleryCategory>
          <TabGalleryCategory value={tabIndex} index={1}>
            <Typography variant="h5" align="center" color="textSecondary">
              Przykładowe realizacje
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              css={styles.gallery}
            >
              {galleryImagesData
                .filter((picture) => picture.category === "wedding")
                .map((el) => (
                  <Grid item key={el.img}>
                    <Paper css={styles.paper} elevation={6}>
                      <img css={styles.image} src={el.img} alt={el.title} />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </TabGalleryCategory>
          <TabGalleryCategory value={tabIndex} index={2}>
            <Typography variant="h5" align="center" color="textSecondary">
              Przykładowe upięcia
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              css={styles.gallery}
            >
              {galleryImagesData
                .filter((picture) => picture.category === "hair")
                .map((el) => (
                  <Grid item key={el.img}>
                    <Paper css={styles.paper} elevation={6}>
                      <img css={styles.image} src={el.img} alt={el.title} />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </TabGalleryCategory>
          <TabGalleryCategory value={tabIndex} index={3}>
            <Typography variant="h5" align="center" color="textSecondary">
              Przykładowe stylizacje
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              css={styles.gallery}
            >
              {galleryImagesData
                .filter((picture) => picture.category === "eyes")
                .map((el) => (
                  <Grid item key={el.img}>
                    <Paper css={styles.paper} elevation={6}>
                      <img css={styles.image} src={el.img} alt={el.title} />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </TabGalleryCategory>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
