import { css } from "@emotion/react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Grow,
  Icon as MUIcon,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { OfferCardType } from "../../types/OfferCardType";
import { Icon } from "@iconify/react";

const OfferCard: FC<OfferCardType> = (props) => {
  const router = useRouter();
  const styles = {
    card: css`
      display: flex;
      flex-direction: column;
      height: 354px;
      width: 300px;
      /* background: #9f9dae; */
      background-clip: border-box;
      border-radius: 15px;
      :hover {
        transform: scale(1.05);
        box-shadow: 0 16px 70px -12.125px rgba(60, 57, 65, 0.45);
        transition: 0.5s;
      }
    `,
    cardMedia: css`
      width: 100%;
      object-fit: fill;
    `,
    actionArea: css`
      height: 100%;
    `,
    cardContent: css`
      /* color: #fff; */
      text-align: center;
    `,
    cardTitle: css`
      text-transform: uppercase;
      letter-spacing: 1.1px;
      color: #504d64;
    `,
    icon: css`
      color: #504d64;
      height: 24px;
      width: 24px;
    `,
    divider: css`
      margin-top: 10px;
      margin-bottom: 10px;
    `,
  };
  return (
    <>
      <Grow in timeout={props.timeout} mountOnEnter unmountOnExit>
        <Grid item xs="auto" lg={3}>
          <Card css={styles.card} elevation={6}>
            <CardActionArea
              css={styles.actionArea}
              onClick={() => router.push(`oferta/${props.slug}`)}
            >
              <CardMedia
                css={styles.cardMedia}
                component="img"
                image={props.image}
                alt={props.title}
              />
              <CardContent css={styles.cardContent}>
                <Typography
                  variant="h5"
                  align="center"
                  css={styles.cardTitle}
                  color="textSecondary"
                >
                  {props.title}
                </Typography>
                <Divider variant="middle" css={styles.divider} />
                <Icon css={styles.icon} icon={props.icon} />
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                >
                  Szczegóły oferty
                </Typography>
                <MUIcon color="action">expand_more</MUIcon>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grow>
    </>
  );
};

export default OfferCard;
