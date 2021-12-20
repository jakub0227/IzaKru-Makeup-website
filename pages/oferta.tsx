import { css } from "@emotion/react";
import { Grid, Typography } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import { AnimatedHeading } from "../components/AnimatedHeading/AnimatedHeading";
import OfferCard from "../components/OfferCard/OfferCard";
import { dataOffers } from "../data";
import { OfferCardType } from "../types/OfferCardType";

interface OfferingPageIndexProps {
  offers: OfferCardType[];
}

const OfferingPage: FC<OfferingPageIndexProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgb(64, 34, 73, 0.5);
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
        margin-top: 70px;
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
    cardRow: css`
      display: flex;
      padding: 10px;
      ${theme.breakpoints.up("md")} {
        margin-top: 45px;
      }
      ${theme.breakpoints.down("sm")} {
        margin-top: 45px;
        margin-bottom: 45px;
      }
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
            Oferta
          </Typography>
          <div css={styles.line} />
        </AnimatedHeading>
        <div css={styles.cardRow}>
          <Grid
            spacing={8}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {props.offers.map((offerItem: OfferCardType) => {
              return <OfferCard key={offerItem.title} {...offerItem} />;
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default OfferingPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = dataOffers;
  return {
    props: { offers: data },
  };
};

// todo: create separate Card component for  different offers, create props to be delivered through getStatic props for services detailed description
